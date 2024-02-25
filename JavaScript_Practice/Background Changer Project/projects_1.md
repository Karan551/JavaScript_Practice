# Projects Related To DOM
## project link

#Solution Code
## Project - 1
``` javascript

const div = document.querySelectorAll(".square");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");
div.forEach(function (element) {
  // This will print every element in console.
  //   console.log(element);
  element.addEventListener("click", (e) => {
    /*  console.log(e)
    console.log(e.target)
    console.log(e.target.id) */
    // To change the color of heading.
    heading.style.color = "#333";
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
##Project - 2
```javascript
const btn = document.querySelector("button");
function calcBmi() {
  // form.addEventListener("submit", function (e) {
  //   // To stop the default behavior of form element.
  //   e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".results");
  if (height === "" || height <= 0 || isNaN(height)) {
    console.log(height)
    result.innerHTML = "Please enter a valid height.";
    // result.innerHTML = "";
  } else if (weight <= 0 || isNaN(weight || weight === "")) {
    console.log(weight)
    result.innerHTML = "Please enter a valid weight.";
  } else {
    const bmi = (weight / height ** 2)*1000;

    result.innerHTML = "<span>${bmi.toFixed(2)}</span>";
    console.log("This is fixed value:", bmi.toFixed(4));
    console.log("This is precise value:", bmi.toPrecision(4));
  }
}
btn.addEventListener("click", function () {
  calcBmi();
});


```