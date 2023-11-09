let btn=document.querySelector("#btn-1")
btn.addEventListener('click',(e)=>{
    // this method is used to stop propgation
    e.stopPropagation()
    console.log("Click on the button 1.")
})

let btn2=document.querySelector("#btn-2")
btn2.addEventListener('click',(e)=>{
    // this method is used to stop propgation
    e.stopPropagation()
    console.log(e)
    // console.log(e.target)
    // console.log(e.type)
    console.log("Click on the button 2.")
})

let container=document.querySelector(".container")
container.addEventListener("click",()=>{
    console.log("click on container.")
})