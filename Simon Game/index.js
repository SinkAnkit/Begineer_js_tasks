var buttonColors = ["red", "blue", "green", "yellow"];
var sequencePattern = [];
var userInputPattern = [];
var hasGameStarted = false;
var currentLevel = 0;

$(document).keypress(function() {
  if (!hasGameStarted) {  
    $("#level-title2").text("Level " + currentLevel);
    generateNextSequence();
    hasGameStarted = true;
  }
});

$(".btn").click(function() {
  var chosenColor = $(this).attr("id");
  userInputPattern.push(chosenColor);
  playSound(chosenColor);
  animateButtonPress(chosenColor);
  validateUserInput(userInputPattern.length - 1);
});

function validateUserInput(levelIndex) {
    if (sequencePattern[levelIndex] === userInputPattern[levelIndex]) {
      if (userInputPattern.length === sequencePattern.length){
        setTimeout(function () {
            generateNextSequence();
          }, 1000);
      }
    } else {
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title2").text("Game Over, Press Any Keyboard Key to Restart");
      resetGame();
    }
}

function generateNextSequence() {
  userInputPattern = [];
  currentLevel++;
  $("#level-title2").text("Level " + currentLevel);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  sequencePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

function animateButtonPress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function resetGame() {
  currentLevel = 0;
  sequencePattern = [];
  hasGameStarted = false;
}
