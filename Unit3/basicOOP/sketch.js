let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
  myCar = new Car();

}

function draw() {
  background(100);

  myCar.display();
  myCar.move();

}




class Car {

  // constructor and attributes
  constructor() {
    this.x = 100 ;  // initialize your attributes here

  }

  // methods

  display() {
    rect(this.x, 100, 75, 25);
  }

  move() {
    this.x = this.x + 10;
  }

}
