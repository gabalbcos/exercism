// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
function Size(widht = 80, height = 60) {
  this.width = width;
  this.height = height;
}

function Position (x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

class ProgramWindow {
  constructor(screenSize = new Size(800, 600), size = new Size(), positon = new Position()){
    this.screenSize = screenSize;
    this.size = size;
    this.position = position;
  }

  resize(new Size()) {
    if (Size.width < 1) {
      Size.widht = 1;
    }
    if (Size.height < 1) {
      Size.widht = 1;
    }    
    if (Size.width <= this.screenSize.width - this.position.x) {
      this.size = new Size
    }
    }
  }
}