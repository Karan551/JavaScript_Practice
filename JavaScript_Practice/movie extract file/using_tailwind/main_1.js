// console.log("Hello world");
const searchBtn = document.querySelector("#search");
const searchMovie = document.querySelector("#search-movie");
const searchNewBtn = document.querySelector("#search-btn");
const container = document.querySelector(".container-1");
const resetBtn = document.querySelector("#reset-btn");
let htmlElement = "";
// --------------apply event on resetBtn
resetBtn.addEventListener("click", () => {
  location.reload();
});

// http://www.omdbapi.com/?i=tt3896198&apikey=b2ccf8ac
function getData() {
  fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=b2ccf8ac&s=${searchMovie.value}`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   call the showMovie function to show display on a webpage.
      showMovie(response["Search"]);
      // console.log("This is response:\n", response["Search"][0]["imdbID"]);
      // console.log("Response is :", response["Search"]);
      
    })
    .catch((error) => {
      console.log("Error:", error);
    });

  console.log("This is search value:", searchMovie.value);
}
searchBtn.addEventListener("click", getData);

// ---------------
function showMovie(movies) {
  movies.forEach((element) => {
    console.log("This is ImdbId:",element["imdbID"]);
    //border-2 rounded-2xl border-black
    htmlElement += `
      <div class="movie">
          <div>
            <img src="${element["Poster"]}" alt="${element["Title"]}-img" class=" rounded-t-2xl" width="500" height="500">
          </div>
          <div class="bg-white rounded-b-2xl px-4 py-4 text-lg">
            <h2 class="font-bold text-lg text-blue-800">Movie Name: <span class="text-gray-500">${element["Title"]}</span></h2>
            <p class="font-semibold  text-blue-800">Year:  <span class="text-gray-500">${element["Year"]}</span></p>
            <p class="font-semibold text-blue-800">Type:  <span class="text-gray-500"> ${element["Type"]}</span></p>
            <p class="font-semibold text-blue-800 mx-1 my-1">More:  <span class="text-white border rounded-xl bg-teal-500 px-2 py-2"><a href="./details.html">Movie Info.</a></span></p>
          </div>
      </div>
        `;
  });
  container.innerHTML = htmlElement;
}
