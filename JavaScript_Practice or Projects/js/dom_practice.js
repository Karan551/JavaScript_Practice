// This will print entire webpage.
// console.log(document)
// This will print body tag.
// console.log(document.body)
// This will print head tag.
// console.log(document.head)
// This will also print entire webpage.
// console.log(document.documentElement)

// This will print body first child
// console.log(document.body.firstChild)
// This will print body last child
// console.log(document.body.lastChild)
// This will print all body child Nodes and it returns NodeList not an array.

// console.log(document.body.childNodes)
// we can also access first child this way
// console.log(document.body.childNodes[0])
let last=document.body.childNodes.length-1
// we can also access the last child this way.
// console.log(document.body.childNodes[last])
// console.log(document.body.parentNode)
// This will pringt previous Element sibling 
// console.log(document.head.previousElementSibling)
// console.log(document.body.nextElementSibling)
console.log(document.body.firstChild)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)