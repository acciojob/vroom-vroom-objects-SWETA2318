// Car constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding a method to Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + ' ' + this.model;
};

// SportsCar constructor inheriting from Car
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to initialize make and model
    Car.call(this, make, model);
    
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);

// Adding a method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;