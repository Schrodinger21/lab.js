console.log("lab 13.1 tạo object");
function car(make, speed) {
  this.make = make;
  this.speed = speed;
}
car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Tốc độ mới sau khi tăng 10km/h la : ${this.speed}`);
};
car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Tốc độ mới sau khi giảm bớt 5km/h: ${this.speed}`);
};

console.log("Data car 1 BMW: ");
const car1 = new car("BMW", 120);
console.log(car1);
console.log("Data car 1 Mercedes: ");
const car2 = new car("Mercedes", 95);
console.log(car2);

car1.accelerate();
car2.brake();

console.log("lab 13.2 Sử dụng ES6 Class");
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }

  accelerate() {
    this.speed += 10;
    console.log(`Tốc độ mới sau khi tăng bớt 10km/h: ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Tốc độ mới sau khi giảm bớt 5km/h: ${this.speed}`);
  }
}

console.log("Data car 1 BMW: ");
const carCl1 = new CarCl("BMW", 120);
console.log(carCl1);
console.log("Data car 1 Mercedes: ");
const carCl2 = new CarCl("Mercedes", 95);
console.log(carCl2);

carCl1.accelerate();
carCl1.brake();
// console(carCl1.speedUS);
carCl1.speedUS = 100;
console.log(carCl1);

carCl2.accelerate();
carCl2.brake();
// console(carCl2.speedUS);
carCl2.speedUS = 100;
console.log(carCl2);

// Lab 13.3 Tính kế thừa
console.log("lab 13.3 tính kế thừa");
const EV = function (make, speed, charge) {
  car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
