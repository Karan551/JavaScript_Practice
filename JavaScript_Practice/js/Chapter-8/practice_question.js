//Que:1-> Write a program to show different alerts when different buttons are clicked.
let btn_1=document.getElementById("btn-1")
let btn_2=document.getElementById("btn-2")
btn_1.addEventListener('click',()=>{
    alert("Button-1 was clicked.")
})
btn_2.addEventListener('click',()=>{
    alert("Button-2 was clicked.")
})
// console.log(document.body.tex)