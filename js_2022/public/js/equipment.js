console.log('hw equip!')

const socket = io()

const root = document.querySelector('#root')

function addEquipment(id, title, count) {
    const blockId = `eq_${id}`

    root.insertAdjacentHTML('beforeend', `
    <div id = ${blockId}>
        <span>Название: </span>
        <input value="${title}">
        <span>Количество: </span>
        <input value="${count}">
        <button class ="save_button">сохранить</button>
    </div>`
    )
    const saveButoon = document.querySelector(`#${blockId} .save_button`)
    saveButoon.addEventListener('click', () => {
        const title = document.querySelector(`#${blockId}.title`).value
        const count = document.querySelector(`#${blockId}.count`).value
        socket.emit('equipment_update', {id, title, count})
    })
}

async function loadEquipment() {
    const response = await fetch('/equipment/all')

    if (response.ok) {
        const equipment = await response.json()
        console.log(equipment)

        for (const eq of equipment) addEquipment(eq.id, eq.title)
    } else {
        console.error(response.status)
    }
}

loadEquipment()

function updateEquipment(eq) {
    const blockId = `eq_${id}`
    document.querySelector(`#{blockId} .title`).value = eq.value
    document.querySelector(`#{blockId} .count`).value = eq.count
}

socket.on('update_equipmentd', updateEquipment)