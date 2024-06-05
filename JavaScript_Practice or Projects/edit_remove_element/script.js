const inputLang = document.querySelector("#new-lang");
const btn = document.querySelector("#btn");
const editBtn = document.querySelector("#edit-btn");
const removeBtn = document.querySelector("#remove-btn");

// This method is used to Add a language that is given.
function newLang(langName) {
  const newLang = document.createElement("li");
  newLang.innerHTML = langName;
  document.querySelector(".lang").appendChild(newLang);
}
// call the function
// newLang("Python");
// apply event
btn.addEventListener("click", () => {
  if (inputLang.value != "") {
    // newLang(inputLang.value);
    newOptiLang(inputLang.value);
  } else {
    alert("Please enter a Language name.");
  }
});

// This
function newOptiLang(langName) {
  /* 
    ----------------In Optimize method we use-----------
    1. First we will create element.
    2. Then we will create text node.
    3. Then we will append text node in created element.
    4. And after all we append in required element that is newly created
       element.
  */
  const newLang = document.createElement("li");
  const text = document.createTextNode(langName);
  newLang.appendChild(text);
  document.querySelector(".lang").appendChild(newLang);
}
// calling function
// newOptiLang("Python");

function editLang(langName) {
  const li = document.querySelector("li:nth-child(2)");
  li.textContent = langName;
}

editBtn.addEventListener("click", () => {
  editLang(inputLang.value);
});

function removeLastLang() {
  const li = document.querySelector("li:last-child");
  li.remove();
}

removeBtn.addEventListener("click", () => {
  removeLastLang();
});
