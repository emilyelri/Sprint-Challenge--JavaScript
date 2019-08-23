console.log('');
console.log('------------------------------');
console.log('classes.js');
console.log('------------------------------');
console.log('');

// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(l, w, h) {
    this.length = l;
    this.width = w;
    this.height = h;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

  class CubeMaker extends CuboidMaker2 {
      constructor(side) {
          super(side);
          this.side = side;
      }
      volume() {
        return this.side * this.side * this.side;

      }
      surfaceArea() {
        return 6 * this.side * this.side;
      }
  }

  const cuboid2 = new CuboidMaker2(4, 5, 5);
  const cube = new CubeMaker(2);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130