// ----------------------Promise-------------------------
// console.log("This is first line");
// Declare a promise object. with normal function
/* let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve(true);
    reject(new Error("Some error happened."));
  }, 4000);
}); */
// Declare new promise object with arrow function.
/* let promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(101);
  }, 3000);
});
 */
/* console.log("This is third line.");
console.log(promise); */
// It is used to get values of promise we can use this to catch error also.
// adding then handler with promise.
/* promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
 */
// It is used to catch error that provided by promise.
// Adding catch handler with promise.
/* promise.catch((error) => {
  console.log(error);
});
 */
//  This is the second promise object testing object.
// this will execute every conditions mean if promise resolve or reject. It doesn't effect.
/* promise_2.finally(() => {
  console.log("This promise worked finally.");
});
 */
// adding then handler with promise_2 object.
/* promise_2.then(
  (result) => {
    console.log(result);
    return "Hello World with promise.";
  },
  (error) => {
    console.log(error);
  }
); */
// If we want to handle only error then we will have to write this way:-
// This is similar to the catch handler .
/* promise_2.then(null, (error) => {
  console.log(error);
}); */
// adding catch handler with promise_2 object.This will only handle error

/* promise_2.catch((error) => {
  console.log("Something occured.");
}); */
// -------------------  Promise Chaining ---------------------------------
/* let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(11);
  }, 4000);
})
  .then(function (result) {
    console.log(result);
    // double the resolve the value.
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    // triple the above promise value.
    return result * 3;
  })
  .then((value) => {
    console.log(value);
    return value * 4;
  }); */

// console.log(promise3);
// this wil show the last result.
/* promise3.then((result) => {
  console.log(result);
}); */
// ---------- Promise Chaining With Returning Promise ---------------
/* new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(15);
  }, 3000);
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 2000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3000);
    });
  }); */
//                  ---------- Promise API ---------------
// create a new promise
/* let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(51);
    // reject(new Error('error happened.'))
  }, 2000);
}); */
// create another promise
/* let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(511);
    // reject(new Error("Some occor."));
  }, 3000);
}); */
// create another promise.
/* let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(551);
  }, 5000);
}); */
/* promise1.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
); */

/* promise2.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
); */

/* promise3.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
); */
// If we want to find all values together then we will have to use Promise
// api
// 1.)Syntax:- Promise.all(iterable)->It returns a new Promise.
// If any promise has an error then this gives an error.So We will have to use
/* let promise = Promise.all([promise1, promise2, promise3]);
promise.then((result) => {
  console.log(result);
}); */
// 2.) Syntax:-> Promise.allsettled(iterable)->It also returns a new promise.
/* let promise = Promise.allSettled([promise1, promise2, promise3]);
promise.then((result) => {
  console.log(result);
}); */
// 3.) Syntax:-> Promise.race(iterable)->It also returns a new Promise.
// It excute the first settled promise and excute the result (or error.)
// It execute the resolve and error both.
/* let promise = Promise.race([promise1, promise2, promise3]);
promise.then((result) => {
  console.log(result);
}); */
// 4.) Syntax:-> Promise.any(iterable)-> It also returns a new promise.
// It excute the first fullfiled promise resolve value (result) and gets the result.
/* let promise = Promise.any([promise1, promise2, promise3]);
promise.then((result) => {
  console.log(result);
}); */
// 5.) Syntax:-> Promise.resolve()

// 6.) Syntax:-> Promise.reject()
//--------------------- Async Await ---------------
/* let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(true);
  }, 3000);
});
promise.then((value) => {
  console.log(value);
}); */
/* async:-> If we use async keyword with any function it will automatically
make promise
*/
/* async function hello() {
  // console.log("Hello promise how are you?");
  return "Hello Promise.";
} */
// Get the value of promise.
/* hello().then(
  (response) => {
    console.log(response);
  },
  (err) => {
    console.log(err);
  }
); */
// The above function is similar the following function
/* async function greet() {
  return Promise.resolve("This is new Promise.")
} */
// we can get the values of any promise.

/* greet().then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
); */

async function getData() {
  // This is first promise
  let mumbaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Mumbai weather is 27deg.");
      resolve("27 deg.");
    }, 2000);
  });
  // This is second promise
  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("32 deg.")
      // To show that how to handle error with asy
      // reject(new Error("Something occured."));
    }, 7000);
  });
  // Display data on console.
  console.log("Fetching Mumbai Weather Information....");
  let getWeather1 = await mumbaiWeather;
  console.log("Mumbai Weather is " + getWeather1);
  console.log("Fetching Banglore Weather Information....");
  let getWeather2 = await bangloreWeather;
  console.log("Banglore Weather is " + getWeather2);
}
// if promise reject with async and await then we will try and catch to  handle this error otherwise we will have to use catch() after the function call.
// calling a function
getData().catch((value) => {
  console.log(value);
});
