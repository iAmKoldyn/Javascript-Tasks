const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const http = require('http')
const { Server } = require('socket.io')

const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(`${__dirname}/public`))

const redis = require('redis')
const redisClient = redis.createClient({ url: 'redis://localhost:26596', password: 'redis' })

redisClient.on('error', err => console.log('Redis Client Error', err))
redisClient.connect()

io.on('connection', socket => {
    console.log('a user connected')

    socket.on('equipment_update', async (eq) => {
        console.log(`update_equipment emited: equipment = ` , eq)

        const query = `
        update equipment
        set title = 1$, count = $2
        where id = $3
        returning id
        `
        const queryRes = await pool.query(query, [eq.title, eq.count, eq.id])
        if (queryRes.rows.length > 0) io.emit('update_equipmentd', eq)

        // io.emit('equipment_updated', eq )
})

    // socket.on('chat message', async msg => {
    //     await redisClient.RPUSH('messages', msg)
    //
    //     console.log('message: ' + msg)
    //     io.emit('sent_to_all', msg)
    // })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

app.get('/equipment',(_, res ) => {
    res.sendFile(`${__dirname}/public/equipment.html`)
})

app.get('/equipment/all', async (_, res) => {
    const query = 'select * from equipment  order by id'
    const  queryRes = await pool.query(query)

    res.json(queryRes.rows)
})

app.use(bodyParser.json())

const port = 3000

const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 38746,
    database: 'postgres'
})

app.get('/last_messages', async (req, res) => {
    const messages = await redisClient.LRANGE('messages', -10, -1)
    res.json(messages)
})

app.get('/holders', async (req, res) => {
    try {
        const { limit, offset } = req.query

        const redisKey = `/holders?limit=${limit}&offset=${offset}`

        const redisHolders = await redisClient.get(redisKey)

        if (redisHolders == null) {
            const { rows } = await pool.query(
                `
select * from holder
limit $1
offset $2
            `,
                [limit, offset]
            )

            await redisClient.set(redisKey, JSON.stringify(rows), { EX: 30 })

            res.send(rows)
        } else {
            res.setHeader('Content-Type', 'application/json')
            res.send(redisHolders)
        }
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

app.post('/holders/create', async (req, res) => {
    try {
        const { phone, name } = req.body

        const queryResult = await pool.query(
            `
        insert into holder (phone, name) 
        values ($1, $2)
        returning id`,
            [phone, name]
        )

        res.json({ id: queryResult.rows[0].id })
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
