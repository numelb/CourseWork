
//Write code that defines a constructor function called Car that creates a new object with the following properties: make, model, and year.
class Car {
    constructor(make, model, year) {  // Constructor
      this.make = make;
      this.model = model;
      this.year = year;
    }

      //Add a method called getDescription to the Car prototype, which returns a string containing information about the car.
 getDescription(){

    return this.make +" "+ this.model + " " + this.year;
}

  
    }


//Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.
class ElectricCar extends Car {
   constructor (make, model, year,range){
        super(make, model, year) 
        this.range = range;

   }
   //Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information 
  //about the range of the electric car
   
   getDescription(){

    return "This " + this.make +" "+ this.model + " " + this.year + " drives at " + this.range +" mpg";
  } 
}    


//Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called 
//on the instance. The output will be a string containing the make, model, year, and range of the electric car.
var car = new ElectricCar('Tesla','Model_S', '2019','300' );
var car2 = new Car('Tesla','Model_S', '2019')
console.log(car2.getDescription());
console.log(car.getDescription());
