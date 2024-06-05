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
