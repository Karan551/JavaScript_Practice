// How to create a singleton object
/* 
const myObject= new Object()
console.log(myObject) 
*/

// This is second method to create an object
const tinderUser = {};
tinderUser.name = "Mahesh";
tinderUser.age = 18;
tinderUser.profession = "Software Developer";
console.log(tinderUser);

const newUser = {
  email: "someone@gmail.com",
  fullName: {
    userfullName: {
      firstName: "Ganesh",
      lastName: "Mishra",
    },
  },
};
/* 
console.log(newUser.fullName.userfullName.firstName)

console.log(newUser.fullName.userfullName.lastName) 
*/
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };
// If we want to create another object with previous two objects that data in the new object then we will use this method.
// This is the first method to create this.
// Object.assign(targetObject,sourceObject)
/* 
const newObj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj1);
console.log(obj2);
console.log("This is new Object :", newObj3);
const obj3 = { obj1, obj2 };
console.log(obj3);

 */

// second method
/* 
const newObject = { ...obj1, ...obj2 };
console.log(newObject); 
*/
const newTinderUser = [
  { name: "Ganesh", email: "ganesh@gmail.com" },
  { name: "Mahesh", email: "mahesh@gmail.com" },
  { name: "Kartik", email: "kartik@gmail.com" },
];
console.log(newTinderUser[0].email);
// This returns an array of Object keys
console.log(Object.keys(tinderUser));
// This returns an array of Object values.
console.log(Object.values(tinderUser));
//
console.log(Object.entries(tinderUser));
// -------------------------Object Destructuring--------------
const teacher = {
  name: "Saurabh Shukla",
  profession: ["Teacher", "Youtuber"],
  language: ["C", "C++", "Java", "Python"],
  fee: 3000,
};
const {name:teacher1,language,profession}=teacher
console.log(teacher1)
console.log(profession)
console.log(language)



