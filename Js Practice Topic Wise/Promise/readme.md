# Promises :-

- A Promise is a special Javascript Object that links the **Producing Code** and **Consuming Code** together.

#### How To Create A Promise :-

- **Syntax ( How To Create A Promise ):-**

```javascript
const promise = new Promise(function (resolve, reject) {
  //  executor (// Producing Code)
});
```

- The Function Passed to **new Promise** is called the executor.
- Its arguments **resolve** and **reject** are **callbacks** provided by JavaScript itself. Our code is only inside the executor.

- When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- **resolve(value)** — If the job is finished successfully, with result value.
- **reject(error)** — If an error has occurred, error is the error object.
- ![img](./images/promise-resolve-reject.svg)

[More Information Click Here](https://javascript.info/promise-basics)

- **For example to create a promise :-**

```javascript
const promiseObject = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is a Promise.");
    const error = false;
    if (!error) {
      resolve({ username: "Ganesh", profession: "Programmer" });
    } else {
      reject("Something Went Wrong.");
    }
  }, 2000);
});
```

---

# Promise :-

- _A Promise is an object representing the **eventual completion or failure** of an_ **asynchronous operation**.
- Essentially, **a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function**.

#### A Promise is in One of these states:-

- **pending:** initial state, neither fulfilled nor rejected.
- **fulfilled:** meaning that the operation was completed successfully.
- **rejected:** meaning that the operation failed.

  **A promise is said to be _settled_ if it is either _fulfilled_ or _rejected_, but not _pending_.**

![img](./images/image.png)

[More Information Click Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## How To Recognise an Object is Promise Object or not :-

```javascript
//  Create Promise object
const promiseObject = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

// To recognise an object is Promise is not
// This returns true if this is promise object if not promise object this returns false.
let isPromise = promiseObject instanceof Promise;
console.log("This is Promise object :", isPromise);
```

---

## How To Consume A Promise :-

### 1. **Consume a Promise Using Chaining Method :-**

```javascript
promiseObject
  .then(function (response) {
    return response.username;
  })
  .then(function (result) {
    console.log("This is final result", result);
  })
  .catch(function (err) {
    console.log("This is error", err);
  })
  .finally(() => {
    console.log("Promise Four is finished.");
  });
```

---
### 2. Using Async & Await Keyword Method To Consume A Promise :-
#### Async & Await Keyword :-

- **await keyword :-** `await` keyword basically makes `JavaScript` wait until the `Promise Object` is `resolved or rejected`.
- For example:-

```javascript
const response = await fetch("https://api.github.com/users/hiteshchoudhary");
const json = response.json();
console.log(json);

// Above Code Gives error because await keyword should be afer async keyword
```

- `await` keyword is placed before the call to a function or variable that `returns a promise`. **It makes JavaScript wait for the Promise Object to settle before running the code in next line.**

- **async keyword :-** To create an `asynchornous function` we need to add `async keyword` before our `function name`.

- For Example:-

```javascript
async function myFunction() {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  const jsonData = await response.json(response);
  console.log(jsonData);
}
// call function
myFunction();
```

### How To Handle Errors With Async/Await :-

- To Handle Errors with `async / await` we will have to use `try / catch` block with `async / await` :-
- For example :-

```javascript
async function myFunction() {
  try {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    const jsonData = await response.json(response);
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Our task has finished finally.");
  }
}

// call function
myFunction();
```

- `finally()` block is `optional` this will execute if function **resolve or reject does not matter**.This block will always execute.

### How To Use Async/Await in Arrow Functions :-

```javascript
const myFunction = async () => {
  try {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    const jsonData = await response.json(response);
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};

//  call function
myFunction();
```

- Above example of **Arrow Asynchronous Function**

### How To Use Async/Await in IIFE:-

- **IIFE (Immediately Invoked Function Expression)** is a technique that is used to execute a function immediately as soon as we define it.
- **For Example :-**

```javascript
(async function myFunction() {
  try {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    const jsonData = await response.json(response);
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
})();
```
