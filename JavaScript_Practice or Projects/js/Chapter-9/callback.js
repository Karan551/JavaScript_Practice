// Example of callback function :-
function loadScript(src, callback, e = 10) {
  let script = document.createElement("script");
  script.src = src;
  // calling a function
  script.onload=()=>callback(src)
  // callback(e);
//   this works when error happens
script.onerror=()=>{callback(new Error("Error has happened."))}
  document.head.append(script);
  // console.log(script);
}
let source =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";

// calling a function
loadScript(source, (element) => {
//   alert("Script is Loaded.");
  console.log("Script src is :" + element);
});
function callback(src){
    alert("Script is loaded.")
console.log("script src is:"+src)
}
