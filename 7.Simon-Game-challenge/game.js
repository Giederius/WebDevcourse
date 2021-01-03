// game pattern
var gamePattern = [];
// User clicked pattern
var userClickedPattern = [];
// button colors
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  // function to generate random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  // randomizes which color is picked
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(randomChosenColor);

  flashAnimation(randomChosenColor);

  playSound(randomChosenColor);
}
// Detecting user button press
var buttonNumbers = document.querySelectorAll(".btn").length;

for (i = 0; i < buttonNumbers; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
  });
}

// flashing animation

function flashAnimation(randomChosenColor) {
  var activeButton = document.querySelector("#" + randomChosenColor);
  console.log(activeButton);
  activeButton.classList.add("played");
  setTimeout(function () {
    activeButton.classList.remove("played");
  }, 100);
}

// User press animation
function animatePress(currentColor) {
  var activeButton = document.querySelector("#" + currentColor);
  console.log(activeButton);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// playsound when the button is pressed
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
