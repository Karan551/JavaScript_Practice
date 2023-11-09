// Que:1
function loadScript() {
  let script = document.createElement("script");
  script.src = "./promise.js";
  document.body.append(script);
  console.log(script);
}

/* let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // calling a function
    loadScript();
    resolve(true);
  }, 3000);
}); */
// This is shortcut to show alert on the webpage.
// promise.then(alert)
// This is detail method.
/* promise.then((value) => {
  alert("Javascript File is loaded.");
}); */
// Que:2
async function promise() {
  setTimeout(() => {
    // calling a function
    loadScript();
    return 1;
  }, 3000);
}
promise().then((response) => {
  console.log(response);
});
// console.log(promise());
// console.log(promise())

async function loadData() {
  // this first promise
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is first promise.");
    }, 2000);
  });
  //   this is second promise
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is second promise.");
    }, 3000);
  });
  //   this third promise
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is third promise.");
    }, 4000);
  });
  console.log("Fetching your data.");
  let p1 = await promise1;
  console.log(p1);
  console.log("Your phone has been hacked.");
  let p2 = await promise2;
  console.log(p2);
  console.log("Your data has been reached with us.");
  let p3 = await promise3;
  console.log(p3);
  console.log("Thanks for hacking for your phone.");
  return [p1, p2, p3];
}
loadData().then((response) => {
  console.log(response);
});
