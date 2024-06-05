let para = document.getElementById("first");
let div = document.createElement("div");
div.textContent = "This div element inserted via js.";
// Adding id new create element.
div.id = "division";
// Adding class new create element.
// div.className='box para red ye'
// classList method is used to find all classes to the given element.
// console.log(div.classList)
// classList.add(value)-> This method is used to add a class to the given element.
// div.classList.add('two')

// classList.remove(value)-> This method is used to remove a class to the given element.It returns undefined if class doesn't exist.
// div.classList.remove('ye')
// classList.contains(value)-> This method is used to check a particular class exist in the given element or not.It retruns true if class exist in the element otherwise it returns false.
// let a=div.classList.contains('para')
// console.log(a)
// classList.toggle(value)->This will add a class if class not in the given element otherwise it will remove the class from the element.
/* div.classList.toggle('box')
console.log(div)
console.log(para) */

let clock = document.querySelector("#time");
// setTimeout() and clearTimeout()
/* setTimeout(() => {
    console.log("Hello World two.")
}, 2000) */
console.log("This is para -1");


/* let a = setInterval(() => {
  // console.log('hello world time')
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  showTime.innerHTML = `${hour}:${minute}:${seconds}`;

//   console.log(seconds);
}, 1000); */
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  let am_pm = "AM";
  if (hour >= 12) {
    // if hour is greater than 12 
    if(hour>12){
      //  then display time 12 format.
      hour = hour - 12;
    }
    am_pm = "PM";
  } else if (hour ==0) {
    hour = 12;
  }
  // including zero if hour , minute , second is less than 10.
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // Display time to the webpage.
  clock.innerHTML = `${hour}:${minute}:${seconds} ${am_pm}`;
}

// call a function starting time
showTime()
// call a showTime function every second to update the time.
setInterval(showTime,1000)
