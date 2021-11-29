class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("vroom");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
const car = new Car();
car.drive();
