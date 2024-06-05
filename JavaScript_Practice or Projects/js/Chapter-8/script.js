let para1=document.getElementById('para-1')
// This will print only value
console.log(para1)
// This will print with its properties.
// console.dir(para1)
// this will print the given element tag name and node name
/* console.log(para1.tagName)
console.log(para1.nodeName) */
// This will print the element innerHTML
// console.log(para1.innerHTML)
// This will set the given element value.
// para1.innerHTML='<h2>Hello World6!</h2>'
// outerHTML returns given element with tags and content.

// This property gives us only element text not a tag.
let text=para1.textContent
// console.log(text)
// By default all element hidden value is false
// para1.hidden=true

// Attribute methods:-
console.log(para1.attributes)
console.log(para1.hasAttribute('id'))
console.log(para1.hasAttributes('id','class'))
// this gives us id attribute value (given attribute value.)
// console.log(para1.getAttribute('id'))
// It is used to set attribute name and it's value.
// console.log(para1.setAttribute('class','box-2'))
// It is used to remove any attribute from given an element.
// console.log(para1.removeAttribute('class'))

