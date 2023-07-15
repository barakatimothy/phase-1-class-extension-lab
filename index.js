class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    constructor(...args) {
      super(...args);
    }
  
    get isValid() {
      if (this.countSides === 3) {
        const [side1, side2, side3] = this.sides;
        return side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2;
      }
      return false;
    }
  }
  
  class Square extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      if (this.countSides === 4) {
        const [side1, side2, side3, side4] = this.sides;
        return side1 === side2 && side2 === side3 && side3 === side4;
      }
      return false;
    }
  
    get area() {
      if (this.isValid) {
        const side = this.sides[0];
        return side * side;
      }
      return null;
    }
  }
  