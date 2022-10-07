export class Size {
    constructor(width=80, height=60) {
      this.resize(width, height)
    }
    resize(width=0, height=0) {
      this.width = width
      this.height = height
    }
  }

  export class Position {
    constructor(x=0, y=0) {
      this.moveTo(Math.max(0, x), Math.max(0, y))
    }
    moveTo(x=0, y=0) {
      this.x = x
      this.y = y
    }
    
    move(x=0, y=0) {
      this.moveTo(x, y)
    }
  }

  export class ProgramWindow {
    constructor() {
      this.screenSize = new Size(800, 600)
      this.size = new Size()
      this.position = new Position()
    }
    resize(size) {
      const width = size.width > 0 ? size.width : 1
      const height = size.height > 0 ? size.height : 1
      this.size.width = Math.min(width, this.screenSize.width - this.position.x)
      this.size.height = Math.min(height, this.screenSize.height - this.position.y)
    }
    move(position) {
      this.position.x = position.x + this.size.width > this.screenSize.width ? this.screenSize.width - this.size.width : position.x
      this.position.y = position.y + this.size.height > this.screenSize.height ? this.screenSize.height - this.size.height : position.y
      console.log(this.position.x, this.position.y)
    }
  }
  
  export function changeWindow(win) {
    win.size.width = 400
    win.size.height = 300
    win.position.x = 100
    win.position.y = 150
    return win
  }