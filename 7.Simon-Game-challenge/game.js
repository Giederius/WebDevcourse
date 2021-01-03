// game pattern
var gamePattern = [];
// User clicked pattern
var userClickedPattern = [];
// button colors
var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

// GAME START
// detecting button press for the start of the game
document.addEventListener("keydown", function (e) {
  var startButton = e.keyCode;
  if (startButton === 65 && !started) {
    document.querySelector("h1").innerHTML = "Level " + level;
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];
  //   keeping track of what level we are in
  level++;

  //   changing the h1 to reflect which level we are in
  document.querySelector("h1").innerHTML = "Level " + level;
  // function to generate random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);

  // randomizes which color is picked
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  flashAnimation(randomChosenColor);

  playSound(randomChosenColor);
}
// Checking answers
function checkAnswer(currentLevel) {
  console.log(currentLevel);
  console.log(gamePattern);

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    gameOver();
    document.querySelector("h1").innerHTML = "Game Over, Press A to Restart";
    startOver();
  }
}

// Restarting the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// Detecting user button press
var buttonNumbers = document.querySelectorAll(".btn").length;

for (i = 0; i < buttonNumbers; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
}

// flashing animation

function flashAnimation(randomChosenColor) {
  var activeButton = document.querySelector("#" + randomChosenColor);
  activeButton.classList.add("played");
  setTimeout(function () {
    activeButton.classList.remove("played");
  }, 100);
}

// User press animation
function animatePress(currentColor) {
  var activeButton = document.querySelector("#" + currentColor);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

function gameOver() {
  var over = document.querySelector("body");
  over.classList.add("game-over");
  setTimeout(function () {
    over.classList.remove("game-over");
  }, 200);
}

// playsound when the button is pressed
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
