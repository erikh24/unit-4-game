// GLOBAL VARIABLE (accessible by all functions)
//==============================================================================

// Array of all number options for the Target Score (should be between 19 and 120)
var numberList = []

// Game Counters
var numberWins = 0;
var numberLosses = 0;

// Keeps track of your score as you click getms
var yourScore;

// Shows the score that you're trying to match
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
//  need to remove this line of code once it starts working when calling function startGame
document.getElementById('target-score').innerHTML = targetScore(19, 120);



// startGame()
// Its how we we will start and restart the game.
function startGame() {
    // Makes target score show up on the page
    document.getElementById('target-score').innerHTML = targetScore(19, 120);

}


