// GLOBAL VARIABLE (accessible by all functions)
//==============================================================================


// Array of all number options for the Target Score (should be between 19 and 120)
// Might not be needed
var numberList = []

// Game Counters
var numberWins = 0;
var numberLosses = 0;

// Keeps track of your score as you click gems
var yourScore;

// Shows the score that you're trying to match
// Might not be needed
var targetScore;



// Gem Values (hidden value to be between 1 and 12)
var blueValue;
var greenValue;
var redValue;
var yellowValue;


// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================

// Generate target score
function targetScore(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// startGame()
// Its how we we will start and restart the game.
function startGame() {
    // Makes target score show up on the page
    document.getElementById('target-score').innerHTML = targetScore(19, 120);
    
}

$("#blue").on("click", function() {
    yourScore += blueValue;
});

$("#green").on("click", function() {
    yourScore += greenValue;
});

$("#red").on("click", function() {
    yourScore += redValue;
});

$("#yellow").on("click", function() {
    yourScore += yellowValue;
});

// $('#blue').on('click', function (event) {
//     // code to run after a click has occurred.. 
//     return Math.floor(Math.random() * (max-mix)) + min;
//   });


//  MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();




