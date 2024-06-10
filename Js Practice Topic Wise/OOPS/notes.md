# Call() Function :-

- **Call** is a function that helps us to change the context of invoking function. It helps us replace the value of `this` inside a function with whatever value we want.
- **Call** is a function that we use to change the value of `this` inside a function and execute it with the arguments provided.
- **Syntax :-**

```javascript
functionName.call(thisObject,args1,args2,args3,.......)

```

**where :-**

- **functionName** is that function that needs to be invoked with a different `this` object.
- `thisObject` is an object or a value that needs to be replaced with the `this` keyword present inside the **function** `functionName`

- **args1, args2, args3** are arguments that are passed to the invoking function with the changed `this` object.

---

- If we invoke a function without any `this` argument then **JavaScript** consider `this` property to a **global object**.

- **For Example :-**

```javascript
function SetUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

// call a function
userOne = new createUser("Mahesh", "someone@gmail.com", 1232);

console.log(userOne);

/* 
If we call like this :-
==> SetUserName(username)
==> SetUserName.call(username)


// ----- output
createUser { 
email: 'someone@gmail.com',
password: 1232
}

// If we use this method then required we will find :- 

==> SetUserName.call(this, username);

//----- output
createUser {
  username: 'Mahesh',
  email: 'someone@gmail.com',
  password: 1232
}
*/
```
