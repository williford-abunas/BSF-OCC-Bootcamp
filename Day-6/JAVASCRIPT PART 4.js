class Shape {
  constructor(width, height) {
    ;(this.width = width), (this.height = height)
  }
}

Shape.prototype.calculateArea = function () {
  throw new Error('Method not implemented')
}

class Rectangle extends Shape {
  constructor(shapeName) {
    this.shapeName = this.shapeName
  }
}

Rectangle.prototype.displayFormula = function () {
  console.log(`formula is width * height`)
}

Rectangle.prototype.calculateArea = function () {
  console.log(this.width * this.height)
}

const shape1 = new Rectangle(2, 4)

shape1.displayFormula()
shape1.calculateArea()
