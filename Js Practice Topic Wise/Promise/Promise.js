// -------------------How To Create a Promise ---------------
// --------- To create a Promise and store Promise Object into a variable.---
/* const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 1 Is Completed.");
        resolve();
    }, 1000);

});

promiseOne.then(() => {
    console.log("Promise 1 Is Consumed.");
}); */

// -----------------------------Directly Create A Promise-----
/* new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 2 Completed.");
    }, 1000);
    resolve();
}).then(
    console.log("Async Task -2 with out a variable.")
); */


// --------------- Create  a Promise And return a value-----
/* const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ user: "Mahesh", lastName: "Babu" });
    }, 1000);
});

promiseThree.then(function (result) {
    console.log(result);
}) */
//-----------------Create a Promise and return error ----
/* 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Mahesh", lastName: "Babu" });
        } else {
            reject("Something Went Wrong.");
        }
    }, 1000);
});

promiseFour.then((result) => {
    console.log(result);
    return result.username;
}).then((response) => {
    console.log(response);
}).catch(function (error) {
    console.log(error);
}).finally(() => {
    console.log("Promise has executed.");
}); */

// ----------------Consume Promise with async / await

// To create a Promise
/* 
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Mahesh", lastName: "Babu" });
        } else {
            reject("Error:Something Went Wrong.");
        }
    }, 1000);

}); 
*/
// To consume a Promise
/* async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log("Error:", error);
    }
} */

// consumePromiseFive();


// ---------------------- Consume a Promise With Async / await------

/* async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
} */

// getAllUsers();

// ------------------ Consume a Promise With fetch()----------
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        console.log("This is upcoming data:", typeof response);
        return response.json();
    })
    .then((result) => {
        console.log("This is changed data:", typeof result);
        console.log(result);
    })
    .catch((err) => {
        console.log("Error Is :", err);
    });