# Promises :-

- A Promise is a special Javascript Object that links the **Producing Code** and **Consuming Code** together.
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
