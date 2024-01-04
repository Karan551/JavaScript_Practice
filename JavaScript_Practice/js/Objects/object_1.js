// Create an object with the help of literal
const JsUser = {
  name: "Ganesh",
  age: 18,
  profession: "Developer",
  location: "London",
  isLoggedIn: false,
};
console.log(JsUser);
// Accessing the value of object

/* console.log(JsUser.name)
console.log(JsUser.age)
console.log(JsUser.location)
console.log(JsUser.isLoggedIn) */

// This is the second method to access value of an object.

/* console.log(JsUser["name"])
console.log(JsUser["location"]) */

// To add or update the keys of any object.
// To update the keys of any object.


// console.log(JsUser)
JsUser.age = 20;
// To lock that not applying any changes into the object.
// Object.freeze(JsUser)

JsUser["location"] = "Germany"; 
console.log(JsUser)
// To add new key
/* 
JsUser.lastLoggedIn = ["Monday", "Tuesday"];
console.log(JsUser);
 */

// To add a method in an object
JsUser.greeting=function(){
    console.log("Hello new User welcome to this list.")
}
// This return the hole function that is returned greeting method
// console.log(JsUser.greeting)

// call the greeting method
// console.log(JsUser.greeting())
JsUser.greeting()
JsUser.greetingTwo=function(){
  console.log(`Welcome to ${this.name} our game.`)
}
JsUser.greetingTwo()