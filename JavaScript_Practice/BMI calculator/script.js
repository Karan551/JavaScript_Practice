// console.log("This second project.");
// const form = document.querySelector(".bmi-form");
const btn = document.querySelector("button");
// console.log(form);
function calcBmi() {
  // form.addEventListener("submit", function (e) {
  //   // To stop the default behavior of form element.
  //   e.preventDefault();
  //   console.log("Hello this");
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".results");
  if (height === "" || height <= 0 || isNaN(height)) {
    console.log(height)
    // console.log("Hello this3");
    result.innerHTML = "Please enter a valid height.";
    // result.innerHTML = "";
    // alert("Please Enter a valid height.");
  } else if (weight <= 0 || isNaN(weight || weight === "")) {
    console.log(weight)
    result.innerHTML = "Please enter a valid weight.";
    // alert("Please Enter a valid weight.");
  } else {
    const bmi = (weight / height ** 2)*1000;

    result.innerHTML = "<span>${bmi.toFixed(2)}</span>";
    console.log("This is fixed value:", bmi.toFixed(4));
    console.log("This is precise value:", bmi.toPrecision(4));
  }
}
// calcBmi()
btn.addEventListener("click", function () {
  calcBmi();
});
