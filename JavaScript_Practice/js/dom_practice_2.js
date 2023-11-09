console.log("Hello World")
let id=document.getElementById("para-1")
console.log(id)
let className=document.getElementsByClassName('box')
// this will print the last element of the class element.
// console.log(className[className.length-1])
// console.log(className)
// This will select the first element that class has box.
// console.log(document.querySelector('.box'))
// This will select all the elements that class has been box and it will return a NodeList not Array.
// console.log(document.querySelectorAll('.box'))
// This will select all elements that tag Name has p and it will return HTML collection not an array.
// console.log(document.getElementsByTagName('p'))

// This will return True if given selected element has given css selector otherwise It will return False. 
// console.log(id.matches('#para-1'))