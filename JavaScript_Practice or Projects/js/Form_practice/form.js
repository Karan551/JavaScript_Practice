/* window.addEventListener("load", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      console.log(data)
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  }); */
window.addEventListener("load", (event) => {
  console.log("Your webpage is fully loaded.");
});
const form = document.querySelector("user-form");
const userForm = new FormData(form);
console.log(userForm);

