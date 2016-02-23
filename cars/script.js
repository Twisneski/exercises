/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/
function Car () {
  this.make ="Chevy";
  this.model ="Impala";
}

Car();

var ford = new Car();
ford.property = "red";
console.log('ford',ford);

var ford = new Car();
ford.property = "blue";
console.log('ford',ford);

var ford = new Car();
ford.property = "green";
console.log('ford',ford);


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function Mobile () {
  this.species = "Mobile";
}
Mobile.prototype = new Car();


/*
Create a function, Model, to hold the
corresponding property and value
*/
var Mobile = new Mobile();
console.log('mobile',Mobile);



// What is the prototype of a Model?
function coolCar () {
  this.name = "coolCar";
}
Angus.prototype = new Mobile();

var coolCar = new coolCar();
console.log('coolCar',coolCar);

// Define a Car


// What is the prototype of a Car?


// Create the first car


// Create the second car


// Create the third car





/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make = function() {
  this.makeName = "Nissan";
};

/*
Create a function, Model, to hold the
corresponding property and value
*/
var Model = function(vehicleModel) {
  this.modelName = vehicleModel;
};

// Define the prototype of a Model?
// Model ---> Make
Model.prototype = new Make();

// Define a Car
var Truck = function(truckColor) {
  this.color = truckColor;
};

var Car = function(carColor) {
  this.color = carColor;
};

var Motorcycle = function(motoColor) {
  this.color = motoColor;
};

// Define the prototype of a Car?
// Truck ---> Model ---> Make
Truck.prototype = new Model("Accord");
Car.prototype = new Model("Accord");
Motorcycle.prototype = new Model("Accord");

// Create the first car
var myTruck = new Truck("Blue");

// Create the second car
var markTruck = new Truck("Metallic Sunshine");

// Create the third car
var juanTruck = new Truck("Golden Sunset");

console.log("myTruck", myTruck);
console.log("markTruck", markTruck);
console.log("juanTruck", juanTruck);




