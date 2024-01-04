// console.log("Hello world");
const searchInput = document.querySelector("#search-movie");
const searchBtn = document.querySelector("#search-btn");
const resetBtn = document.querySelector("#reset-btn");
const container = document.querySelector(".container");

// -------------------To apply event on reset btn
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  // To reload the webpage.
  location.reload();
});

let html = "";

// http://www.omdbapi.com/?i=tt3896198&apikey=b2ccf8ac

function getMovieData() {
  fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=b2ccf8ac&s=${searchInput.value}`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      /*   console.log(response["Search"]);
      console.log(response["Response"]);
      console.log(response["totalResults"]); */
      // This gives us array of objects.
      // console.log(response["Search"])

      // call the display movies function
      displayMovies(response["Search"]);
    })
    .catch((err) => console.log("Error is ", err));
}
// ------------------------------

// window.addEventListener("dblclick", getMovieData);
// searchBtn.addEventListener("click", getMovieData);

//This function is used to display movies on webpage.
function displayMovies(movies) {
  movies.forEach((element) => {
    html += `
        <div class="movie">
          <img src="${element["Poster"]}" alt="Movie-img">
          <h3>${element["Title"]}</h3>
          <p>${element["Year"]}</p>
        </div>
    
    `;
    container.innerHTML = html;
  });
}
// ---------------To validate input search field----------
function checkSearch() {
  if (searchInput.value == "") {
    console.log("This is value", searchInput.value);
    alert("Please Enter some movie name in search field.");
  } else {
    // call the function to display movies
    getMovieData();
  }
}
// To apply event on searchBtn
searchBtn.addEventListener("click", checkSearch);
