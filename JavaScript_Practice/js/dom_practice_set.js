let navElement = document.getElementsByClassName('header_nav')
navElement[0].firstElementChild.firstElementChild.style.color = 'red'

// Que:3
let container = document.querySelector('.container')
container.firstElementChild.style.color = 'green'
container.lastElementChild.style.color = 'green'
// Que:4
// console.log(navElement[0].children)
// navElement[0].children.style.color='cyan'
// This will gives us all nodes 
// console.log(navElement[0].childNodes)

let arr = document.getElementsByTagName('li')
console.log(arr)
// convert  node list into an array.
arr = Array.from(arr)
// b.style.color='red'
// console.log(arr instanceof Array)
arr.forEach(element => {
       element.style.backgroundColor='cyan' 
  
});