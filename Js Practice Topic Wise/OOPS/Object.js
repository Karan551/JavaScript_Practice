function multiply5(number) {
  return number * 5;
}

// To add a property in a function (that is by Default is Object)
multiply5.power = 80;
// To add a method in a function (that is by default object.)
multiply5.statment = function () {
  console.log("This is function statement:");
};

// call a function
let result = multiply5(8);
// console.log(multiply5.statment())

/* 
console.log(result);
console.log("This is power of function: ", multiply5.power);

console.log(multiply5.prototype)
 */

// -----------------------
function createUser(username, score) {
  this.username = username;
  this.score = score;

  /*  this.printMe = function () {
    console.log(`Hello ${this.username} And Your Score Is ${this.score}`);
  }; */

  return this;
}

createUser.prototype.increment = function () {
  return this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Hello ${this.username} And Your Score Is ${this.score}`);
  // return "Hello "
};

const userOne = new createUser("Ganesh", 80);
const userTwo = new createUser("Mahesh", 120);
console.log(userOne);
// console.log("User Name is:", userOne.username);
// console.log("User Score is:", userOne.score);
userOne.increment();
userOne.increment();
userOne.increment();
userOne.printMe();
// console.log("User Name is:",);
