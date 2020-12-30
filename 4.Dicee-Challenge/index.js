// Generates a random number
var randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);

// selects images from webpage
var img1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
var img2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

//   Changing text in h1
var headline = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  headline.innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  headline.innerHTML = "Player 2 wins!";
} else if (randomNumber1 == randomNumber2) {
  headline.innerHTML = "draw!";
}
