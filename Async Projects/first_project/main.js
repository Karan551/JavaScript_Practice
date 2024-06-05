const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
let temp;
function generateRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

const hexColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += hex[generateRandomNumber(hex.length)];
  }
  return color;
};

const rgbColor = () => {
  const red = generateRandomNumber(256);
  const green = generateRandomNumber(256);
  const blue = generateRandomNumber(256);
  let color = `rgb(${red},${green},${blue})`;
  return color;
};

console.log("This is rgb color :",rgbColor())

startBtn.addEventListener("click", () => {
  temp = setInterval(() => {
    // document.body.style.backgroundColor = hexColor();
    document.body.style.backgroundColor = rgbColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(temp);
  //   To save memory
  temp = null;
});
