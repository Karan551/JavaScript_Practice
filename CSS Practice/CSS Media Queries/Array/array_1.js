// To declare an array
// --------------First method To Declare an array.
const array = [1, 2, 3, 4, 5];
const arr2 = ["Hello", "Java"];
// console.log("This is array one:", array);
// -----------------Second method to create an array of elements
const myNewNum = new Array(1, 2, 3, 4, 5, 11, 22);
const firstNumber = 20;
const secondNumber = 40;
// array.push(myNewNum);
// -----------Combine Two or more array

/* 
const newNumArray=array.concat(myNewNum,arr2)
console.log(newNumArray);
 */
// ------------Second method to combine two or more array
const arr3 = [...array, ...arr2, ...myNewNum];
// console.log("New Array Is:", arr3);

/* 
console.log("This is array two:", myHeros);
console.log(typeof myHeros); 
*/
// Array methods

const marvel_heros = [
  "Thor",
  "ironMan",
  "Captain America",
  "Spider Man",
  "Super Man",
];
// push():- This method adds an element at the end of the array.This returns the new length of the array.
const len = marvel_heros.push("Hulk");
// console.log(marvel_heros, "\nNew length of Array is:", len);
//pop():- This method is used to remove last element from an array . This returns that element that popped.

/* 
const element = marvel_heros.pop();
console.log("Popped element is :", element);
console.log("After pop new array is:");
console.log(marvel_heros); 
*/

// unshift():- This method adds an element at the begin of the array.This returns the new length of the array.
/* 
const newLen = marvel_heros.unshift("Caisi");
console.log(marvel_heros, "And the new Length of array is :", newLen);
 */
// shift():- This method is used to remove first element from an array. This returns that element that removed.
// console.log("My Original Array is:");
// console.log(marvel_heros);
/* 
const removeElement = marvel_heros.shift();
console.log(removeElement); 
*/
// slice():-This method is used to create a section of an array.This method not change the original array.
/* 
const anotherArray = marvel_heros.slice(2, 4);
console.log("Another array is :", anotherArray);
 */
// console.log("After operate slice operation:");
// console.log(marvel_heros);
/* 
'Thor',
'ironMan',
'Captain America',
'Spider Man',
'Super Man',
'Hulk'
] 
*/
// splice():-This method changes the original array. It use to insert or delete elementd from an array.
let b = marvel_heros.splice(2, 2, "Master");
/* 
console.log("b", b);
console.log(marvel_heros);
console.log("After splice operation:");
console.log(marvel_heros); 
*/
