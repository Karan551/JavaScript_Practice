//      ------------------try , catch ------------------------

// Syntax:-
/* 
try{
    //code
}
catch(error){
    // error handling.
}

*/

/* try {
  console.log(Hello);
} catch (error) {
  console.log(error);
  console.log("This is a error message:" + error.message);
  console.log("Error Name is :" + error.name);
  console.log("Stack is :" + error.stack);
} */
//  -----------------Thorwing own error-----------------
/* 
  syntax:- throw < error object >

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);

*/
try{
   let Name
    if(Name==undefined){
        throw new Error("Ye kya likh diya hai. Ise Nhi jante hai hum.")
    }
}
catch(error){
console.log(error)
console.log(error.name)
console.log(error.message)
console.log(error.stack)
}
