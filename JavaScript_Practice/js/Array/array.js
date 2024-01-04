console.log("Array Practice Webpage.");
const arr = [1, 3, 5, 9, 11];
console.log(arr);
console.log(`Old array :`, arr);
//Array methods
//===> Returns the length of the array.
// console.log(arr.push(13))
//===> Returns the last element of the array that is poped.
// console.log("Pop element is :",arr.pop())
//===> Returns the length of the array.
// console.log(arr.unshift(555) )
// Removes the first element of the array and returns it.
// console.log(arr.shift())
// Not recommended it simply creates an empty space of that place.
// delete arr[0]
// It simply creats an array and does not change the original array.
// const myNewArray = arr.slice(2,-1);
const myNewArray=arr.splice(1,2)
// ===> It is used to remove or add elements to the array it changes the original array and returns the array that elements delete from the array.
console.log("My new array is :", myNewArray);
console.log(`New array is :`, arr);
