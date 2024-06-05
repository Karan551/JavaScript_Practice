const coding = ["C", "C++", "Java", "Python", "HTML"];
// print element using forEach method in array.
// coding.forEach((element, index, arr) => console.log(element, index, arr));
// -----------------
// array of objects.
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];
// myCoding.forEach((item) => console.log(item["languageName"]));
// -----------------filter in array.
const myArray = [1, 2, 3, 4, 5];
const myNums = myArray.filter((element) => {
  return element > 5;
});
// console.log("My new Array is :", myNums);
// with the help of forEach we can do like this:-
/* const myNewArray = [];
myArray.forEach((element) => {
  if (element > 5) {
    myNewArray.push(element);
  }
}); */
// console.log("My New array is:", myNewArray);
// ----------objects array
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
// using filter method we can easily filter books array.
console.log("Filtered books are:");
/* const filterBooks = books.filter((element) => {
  return element.genre === "Non-Fiction";
});
console.log("Filter books are:", filterBooks);
console.log("Total available books are :", filterBooks.length); */

// -----------chaining with the help of map and filter method------
/* const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumArr = numArr
  .map((element) => element ** 2)
  .filter((element) => element % 5 == 0);
console.log("So New Array is :", newNumArr);
 */

//-------------reduce()-> This is method is used to find the total value of an array.------------
// using normal function
/* const myTotal = myArray.reduce(function (acc, currentVal) {
  console.log(`acc value is: ${acc} and currentVal is : ${currentVal}`);
  return acc + currentVal;
}, 0); */
const newTotal = myArray.reduce((acc, currentVal) => acc + currentVal, 0);

// find the total bill of user.

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
// ---------------------The reduce method in object.
const totalBill = shoppingCart.reduce((acc, currentValue) => {
  console.log(`acc is ${acc}`);
  return acc + currentValue.price;
}, 0);
console.log("The total bill is ", totalBill);
// console.log("The total value is:", newTotal);
