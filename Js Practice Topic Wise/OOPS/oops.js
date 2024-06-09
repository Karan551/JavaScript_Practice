const user = {
  username: "Ganesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("This data comes from database.")
    // console.log(`Username:${this.username}`);
    console.log(this);
  },
};

// console.log(user);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  console.log(this)
  this.greeting = function () {
    console.log(`Welcome ${this.username} `);
  };

//   return this;
}

const userOne = new User("Ganesh", 5, false);
// const userTwo = new User("Mahesh", 15, true);
// const userThree = new User("Kartik", 20, true);
const userFour = new User("Master", 20, true);
console.log("\n")
// console.log(userOne);
// console.log(userOne.constructor('SpiderMan',25,false));
// console.log(userTwo.greeting());

// console.log(userOne instanceof User)
// console.log(user instanceof User)
