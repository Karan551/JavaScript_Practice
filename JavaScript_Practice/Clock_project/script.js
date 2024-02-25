const clock = document.querySelector(".box");

setInterval(() => {
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString()
}, 1000);

// console.log(time.toLocaleTimeString());
// console.log(time.toLocaleDateString());

// setTimeout(() => {
//     console.log(time.toLocaleString());  
// }, 1000);
/* setInterval(() => {
    let time = new Date(); 
    console.log(time)
},1000 ); */