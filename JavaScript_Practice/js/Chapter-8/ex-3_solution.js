let jokes_arr = [
  "What falls, but never needs a bandage? The rain.",
  "I was going to tell you a joke about boxing but I forgot the punch line.",
  "I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, or winter cleaning either.",
  "Why did the egg hide? It was a little chicken.",
  "What did the dirt say to the rain? If you keep this up, my name will be mud!",
  "Why couldn't the sunflower ride its bike? It lost its petals.",
  "What's an egg's favorite vacation spot? New Yolk City.",
  "I ate a sock yesterday. It was very time-consuming.",
  "What kind of candy do astronauts like? Mars bars.",
  "I wanted to buy some camo pants but couldn't find any.",
  "I ordered a chicken and an egg from Amazon. I'll let you know.",
  "What month is the shortest of the year? May, it only has three letters.",
  "What did the snail who was riding on the turtle's back say? Wheeeee!",
  "I was going to tell a time traveling joke, but you guys didn't like it.",
  "What do you call a lazy kangaroo? A pouch potato.",
  "I used to run a dating service for chickens, but I was struggling to make hens meet.",
  "Why do we tell actors to 'break a leg?'Because every play has a cast.",
  "What does a pig put on dry skin? Oinkment.",
  "What do you call it when a snowman throws a tantrum? A meltdown.",
  "My uncle named his dogs Timex and Rolex. They're his watch dogs.",
  "Did you hear about the guy whose left side was cut off? He's all right now.",
  "How do you open a banana? With a mon-key.",
  //
  `What's the difference between a hippo and a zippo? One’s pretty heavy and the other's a little lighter.`,
  "Did you hear the one about the roof? Never mind, it's over your head.",
  "I used to hate facial hair...but then it grew on me.",
  "A cheese factory exploded in France. Da brie was everywhere.",
  "What's a ninja's favorite type of shoes? Sneakers.",
  "What's the best smelling insect? A deodor-ant.",
  "What do you call a bear without any teeth? A gummy bear.",
  "Why was the coach yelling at the vending machine? He wanted his quarter back.",
  "What did one wall say to the other? I'll meet you at the corner.",
  "Why don't sharks eat clowns? Because they taste funny.",
  `A horse walks into a bar. The bartender says, "Why the long face?"
"What did the pirate say when he turned 80? Aye matey.`,
  "What's black and white and goes round and round? A penguin in the washing machine.",
  "How do you organize a space party? You planet.",
  "Why couldn't the bicycle stand up by itself? It was two tired.",
  "Did you hear the rumor about butter? Well, I'm not going to spread it.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
  "What did one hat say to the other? You wait here, I'll go on ahead.",
  "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks.",
  "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
  "What do you call a boomerang that won’t come back? A stick.",
  "What did the full glass say to the empty glass? You look drunk.",
  "How do you stop a bull from charging? Cancel its credit card.",
  "Why don’t we see elephants hiding in trees? Because they’re really good at it.",
  ` पिंटू- यार आज सुबह-सुबह एक बिल्ली ने मेरा रास्ता काट दिया...
    टिल्लू- अच्छा फिर क्या हुआ?
    पिंटू- फिर क्या आगे जाकर उस बिल्ली का एक्सीडेंट हो गया..हमसे ...`,
];
let random_jokes = document.querySelector(".random-jokes");
let btn = document.querySelector(".btn");
function createJoke() {
  let random_num = Math.floor(Math.random() * jokes_arr.length+1);
  random_jokes.innerHTML = jokes_arr[random_num];
    console.log(random_num);
}
console.log(jokes_arr.length);
btn.addEventListener("click", createJoke);
