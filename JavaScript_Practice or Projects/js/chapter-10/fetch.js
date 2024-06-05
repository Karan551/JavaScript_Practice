// -----------------------Fetch API------------------------------
// Syntax:-fetch(url,[options])->This returns a Promise.
/* let promise = fetch("https://api.nationalize.io?name=nathaniel");
promise
  .then((response) => {
    return response.json();
  })
  .then((value) => {
    console.log(value);
  }); */
//  We can do the above task by using async await like this:-
async function f1() {
  let response = await fetch("https://api.nationalize.io?name=nathaniel");
  let result = await response.json();
  console.log(result);
}
//   calling a function
// f1()
// Another promise
let promise2 = fetch(
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
);
/* promise2
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
  })
  .then((value) => {
    console.log(value);
  });
 */
// this is another method to use fetch method
/* const userData=async ()=>{
let response=await fetch( "https://api.agify.io?name=meelad")
// let response=await fetch( "'https://ronreiter-meme-generator.p.rapidapi.com/meme'")
let value=await response.json()
console.log(value)
}
// calling a function
userData().catch((err)=>{
    console.log(err)
}) */
//
let promise3 = fetch("https://api.github.com/users/remy");
/* promise3
  .then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    if (response.ok) {
      return response.json();
    }
  })
  .then((value) => {
    console.log(value);
  }); */
// using async await
const userInfo = async () => {
  let response=await fetch("https://api.github.com/users/remy")
  console.log(response.status)
  console.log(response.ok)
  console.log(response.method)
  console.log(response.headers)
  console.log(response.body)

  let result =await response.json()
  console.log(result)
}
userInfo()