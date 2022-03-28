// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;
var timer;
var timeLeft = 20;

//Function that generates a random pattern
function patternGenerator() {
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.ceil(Math.random() * 6);
  }
}

//Function to start the game
function startGame() {
  //initialize game variables
  progress = 0;
  clueHoldTime = 1000;
  pattern = [];
  patternGenerator();
  strikes = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

//Function to stop the game
function stopGame() {
  gamePlaying = false;
  clearInterval(timer);
  document.getElementById("seconds").innerHTML = "timer = " + 20;
  document.getElementById("lives").innerHTML = "strikes = " + 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

//Function to display image when button is pressed
function showImage(btn) {
  document.getElementById("image"+btn).classList.remove("hidden");
}

//Function to hide image when button is released
function hideImage(btn) {
  document.getElementById("image"+btn).classList.add("hidden");
}

//Function to light the game buttons
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
  document.getElementById("image"+btn).classList.remove("hidden");
}

//Function to clear the game buttons
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("image"+btn).classList.add("hidden");
}

//Function that lets the computer play a clue
function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//Function for the computer to play entire clue sequence for the turn
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
  timeLeft = 20;
  timer = setInterval(timerLogic, 1000);
}

//Function for the timer
function timerLogic() {
    if (timeLeft > -1){
      console.log("time left: "+ timeLeft);
      document.getElementById("seconds").innerHTML = "timer = " + timeLeft--;
    }
    else{
      clearInterval(timer);
      loseGame();
      console.log("Timer has been stopped");
    }
  }

//Function for guessing logic
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    // game is not active
    //game logic will not be executed
    return;
  }
  
  // game logic
  if (btn == pattern[guessCounter]) {
    // player guessed correctly
    if (guessCounter == progress) {
      // player guessed the entire turn correctly
      clearInterval(timer);
      if (progress == pattern.length - 1) {
        // player has won the game
        winGame();
      }
      else {
        // game has not ended. moving onto the next turn
        progress++;
        playClueSequence();
      }
    }
    else guessCounter++; // player has guessed correctly so far
  }
  else {
    strikes++;//Guess was wrong, add a strike
    document.getElementById("lives").innerHTML = "strikes = " + strikes;
    if (strikes > 2) loseGame(); // game over, player has lost the game
    else return; //still got a chance to win
  } 
}

//Function for when player loses the game
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

//Function for when player wins the game
function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

/*
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 523.8,
  6: 594.3,
}
*/

//Function that plays the tone
function playTone(btn, len) {
  document.getElementById("audio" + btn).play();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

//Function to start playing the tone
function startTone(btn) {
  if (!tonePlaying) {
    document.getElementById("audio" + btn).play();
    tonePlaying = true;
  }
}

//Function to stop playing the tone
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
