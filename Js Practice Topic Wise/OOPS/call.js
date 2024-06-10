function SetUserName(username) {
  //   console.log("Username function called.");
  return (this.username = username);
}

function createUser(username, email, password) {
  SetUserName.call(this, username);
  //   console.log("result is :", result);
  this.email = email;
  this.password = password;
}

// call a function
userOne = new createUser("Mahesh", "someone@gmail.com", 1232);

// console.log(userOne);

// -------Another Example of call()

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  //   console.log("Car Details :", this);
}

function definePrice(type, fuel, price) {
  Car.call(this, type, fuel);
  this.price = price;
}

const hyundai = new setBrand("Hyundai");
console.log(hyundai);

const toyta = new definePrice("Toyota", "Electric", 500000);
console.log(toyta)

