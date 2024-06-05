// --------------How To Create a Promise

/*

const promiseOne = new Promise(function (resolve, reject) {
  // Here We will do async Task
  // like :- Network Request , DB calls etc.
  setTimeout(() => {
    console.log("This is first Promise.");
    // This is responsible to resolve promise.
    resolve();
  }, 2000);
});

 */
//-------------- To consume a Promise
/*
 promiseOne.then(function () {
  console.log("Promise first is Successfully Completed.");
}); 
*/

/*
 console.log(typeof promise);
let result = promise instanceof Promise;
console.log("This is Promise Object or not:", result); 

*/

// To check an object is promise object or not.
const checkPromise = (promise) => {
  return promise instanceof Promise;
};

// Create Another Promise
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This second Promise Object.");
    resolve();
  }, 2000);
  //   Here we will consume Promise.
}).then(function () {
  console.log("Second  Promise Executed Successuflly.");
});

// Create Another Promise Object And Pass data.
const promiseThird = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This is third Promise");
    resolve({ username: "Ganesh", profession: "Programmer" });
  }, 3000);
});

promiseThird.then(function (data) {
  console.log("This is upcoming data", data);
});
//

// Create Another Promise Object And Pass data and convert or return specific data and error handlings.

/* 

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is fourth Promise.");
    const error = false;
    if (!error) {
      resolve({ username: "Ganesh", profession: "Programmer" });
    } else {
      reject("Something Went Wrong.");
    }
  }, 2000);
});


 */
// console.log("Promise Four is Promise Object or not", checkPromise(promiseFour));
// To Consume a promise
/* 
promiseFour
  .then(function (response) {
    return response.username;
  })
  .then(function (result) {
    console.log("This is final result", result);
  })
  .catch(function (err) {
    console.log("This is error", err);
  }).finally(()=>{
    console.log("Promise Four is finished.")
  })
  ; 
  
  */
// Create Asynchorous Function

async function consumePromiseFive() {
  try {
    const response = await promiseFour;
    // Here we will convert data
    const result = response.username;
    console.log("This is response", result);
  } catch (error) {
    console.log("This is error comes:", error);
  }
}

// consumePromiseFive();

// ----------- Consume a promise that comes data via fetch
// ----------- using chaining method

/*


fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((err) => console.log("Error is ", err))
  .finally(() => console.log("Fetch Prmoise is executed finally."));
console.log("\n")
 


*/

// create asynchronous function (consume a promisegit git )
// ----------- using asynchronous function use fetch
async function githubData() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  } finally {
    console.log("Our gihub task has finished finally.");
  }
}

githubData();

console.log("Type of asynchronous function is Promise :", checkPromise(githubData));
