//class definition
//classes and objects
//class is a blueprint
//object are instance of class
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `the name of the bike ${this.name}`;
  }
}

let bike1 = new Vehicle("Ninja", "kawasaki", "v6");
console.log(bike1.getDetails());
