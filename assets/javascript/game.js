// GLOBAL VARIABLE (accessible by all functions)
//==============================================================================

$(document).ready(function () {

    // Game Counters
    var numberWins = 0;
    var numberLosses = 0;
    
    // Keeps track of your score as you click gems
    var yourScore = 0;

    // Get random numbers for gem values and target score
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Gem Values (hidden value to be between 1 and 12)
    var blueValue = randomNumber(1, 12);
    var greenValue = randomNumber(1, 12);
    var redValue = randomNumber(1, 12);
    var yellowValue = randomNumber(1, 12)

    // Target Score
    var targetScore = randomNumber(19, 120);
    document.getElementById("target-score").innerHTML = targetScore;


    // Click events for when clicking on each gem and adding the value to your score
    document.getElementById('blue').onclick = function () {
        yourScore += blueValue;
        document.getElementById("your-score").innerHTML = yourScore;
        gameResults();
    };

    document.getElementById('green').onclick = function () {
        yourScore += greenValue;
        document.getElementById("your-score").innerHTML = yourScore;
        gameResults();
    };

    document.getElementById('red').onclick = function () {
        yourScore += redValue;
        document.getElementById("your-score").innerHTML = yourScore;
        gameResults();
    };

    document.getElementById('yellow').onclick = function () {
        yourScore += yellowValue;
        document.getElementById("your-score").innerHTML = yourScore;
        gameResults();
    };

    function gameResults() {
        if (yourScore === targetScore) {
            numberWins++
            document.getElementById("number-wins").innerHTML = numberWins;
            setTimeout(function() {
            alert("You won the game!!");
            },30)
        } else if (yourScore > targetScore) {
            numberLosses++
            document.getElementById("number-losses").innerHTML = numberLosses;
            setTimeout(function() {
            alert("You lost the game.");
            },30)
        }
    }
});







