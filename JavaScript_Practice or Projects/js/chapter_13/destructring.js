/* 
Array Destructring ==> Array Destructring is a unique technique that allows us to neatly extract an array's value into new variables.
*/

// --------------------Array Destructring--------------------
let arr = [12, 22, 10, 55, 99, 11, 'Hello', 'Python', 'JavaScript']
// console.log(arr)
/* let [a,b,c]=arr
console.log(`The value of a is:${a}\nThe value of b is:${b}`)
console.log(c) */

// ------------------Array Destructring with rest operator-----------
/* let [a,b,c, ...otherValues]=arr
console.log(a,b,c)
console.log(otherValues) */

// -------------------Array Destructring to Extract Values at Any Indexes-
/* let [, , c, , d] = arr
console.log(c)
console.log(d) */

// --------------Default values in Array Destructring-----------
let [a = 'Python', b = 'JavaScript', c = 1, d = 22, ...otherValues] = []
/* console.log(a, b, c, d)
console.log(otherValues) */
// Swapping two values with the help of js
let c1 = 22
let c2 = 44
// ---------------------Swapping with the help array destructuring-----
/* [c1,c2]=[c2,c1]
console.log(c1, c2) */


// ----------------------------Object Destructring----------------
const profile = {
    firstName: "Ram",
    lastName: "Tiwari",
    website: "code.com"
}
console.log(profile)
// ------------------- -------Destructring Of Object--------------------
/* Syntax ==> { key1:variableName1,key2:variableName2,key3:variableName3 ....... } 
*/
// const {firstName:firstName,lastName:lastName,website:website}=profile
/* 
This is a shorthand to destructure of any Object with the help of key we can destructure any object. like this :-
 */
// const { firstName, lastName, website } = profile
// We don't need to store an object in a variable we can do this directly with the help of Object.
/* const { firstName, lastName, website } = {
    firstName: "Ram",
    lastName: "Tiwari",
    website: "code.com"
} */
// console.log(firstName, ' ', lastName, ' ', website)

// ---------------Object Destructring In which variable Name different---
/* const { firstName: foreName, lastName: surName, website: webAddress } = profile
console.log(foreName, ' ', surName, ' ', website) */

const obj1 = {
    lastName: { familyName: "SofeLa" }
}
// Object Destructring
/* const { lastName: { familyName: Name } } = obj1
console.log(Name) */
// -----------Object Destructring while Separating variable Declartions---
let x, y, z
// Extract values from object using destructring
({ x, y, z } = {
    x: "Ram",
    y: "Tiwari",
    z: "code.com"
});
console.log(x, " ", y, ' ', z)

// ------------Object destructring Using rest operator-------
/* const { firstName, ...otherInfo } = profile
console.log(firstName)
console.log(otherInfo) */
// ------------Default Values an Object Destructring----------
/* const { firstName = 'Tobi', lastName = 'shyam',...otherInfo } = {
    firstName: "Ganesh",
    lastName:"Mahesh",
    web:"code.com"
}
console.log(firstName, lastName)
console.log(otherInfo) */

// ----------------Swapping Of values using destructring----------

/* const name1 = "Ram"
const name2 = 'Ganesh'
({ name1, name2 }={ name1: name2, name2: name1 }); */


// -----------Changing the value of object------
let employee = {
    name: 'Ganesh',
    surName: 'Mishra',
    company: "ABC...",
    salary: 15000
}
// console.log(employee)
// Using Destructring we can change the value of any of object.
// console.log({ ...employee, company: "XYZ...", salary: 20000 })

// ----------------------creating an object with given array-----
const arr2 = [10, 20, 30]
// with the help of rest operator we can easily create an object that keys are index that is index of an array.

const objArr2={...arr2}
console.log(objArr2)

function sum(x, y, z) {
    return x + y +z

}
console.log('Sum is :',sum(...arr2)) //// 60