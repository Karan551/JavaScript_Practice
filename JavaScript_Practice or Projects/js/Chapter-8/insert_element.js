let element=document.getElementById("first")
let element_2=document.getElementById("second")

// create an element in the dom
let div=document.createElement('div')
// set the id of the given element
div.id='third'
// set the class of given element
div.className='box'
// adding text content to the element
div.textContent='This element has inserted from js.'
console.log(div)
// append the element into the body
document.body.appendChild(div)
// This method will append the element to the given node at the end.
// element.append(div)
// This method will prepend to the given node at the begining.
// element.prepend(div)
// This method will add the element at the begin of the element.
// element.before(div)
//This method is used to add the element at the bottom the given element.
// element.after(div) 
// This method is used to replace the node with given new node.
// element_2.replaceWith(div)

//insertAdjacent Element
// element.inser 
