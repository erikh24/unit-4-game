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
    $("#target-score").text(targetScore);

    // Set Your Score, Wins and Losses to zero at start of the game
    $("#your-score").text(yourScore);
    $("#number-losses").text(numberLosses);
    $("#number-wins").text(numberWins);

    // Click events for when clicking on each gem and adding the value to your score
    $("#blue").on("click", function () {
        yourScore += blueValue;
        $("#your-score").text(yourScore);
        gameResults();
    });

    // document.getElementById('blue').onclick = function () {
    //     yourScore += blueValue;
    //     document.getElementById("your-score").innerHTML = yourScore;
    //     gameResults();
    // };

    $("#green").on("click", function () {
        yourScore += greenValue;
        $("#your-score").text(yourScore);
        gameResults();
    });

    // document.getElementById('green').onclick = function () {
    //     yourScore += greenValue;
    //     document.getElementById("your-score").innerHTML = yourScore;
    //     gameResults();
    // };

    $("#red").on("click", function () {
        yourScore += redValue;
        $("#your-score").text(yourScore);
        gameResults();
    });

    // document.getElementById('red').onclick = function () {
    //     yourScore += redValue;
    //     document.getElementById("your-score").innerHTML = yourScore;
    //     gameResults();
    // };

    $("#yellow").on("click", function () {
        yourScore += yellowValue;
        $("#your-score").text(yourScore);
        gameResults();
    });

    // document.getElementById('yellow').onclick = function () {
    //     yourScore += yellowValue;
    //     document.getElementById("your-score").innerHTML = yourScore;
    //     gameResults();
    // };

    //Restart game

    function restartGame() {
        blueValue = randomNumber(1, 12);
        greenValue = randomNumber(1, 12);
        redValue = randomNumber(1, 12);
        yellowValue = randomNumber(1, 12)
        yourScore = 0;
        $("#your-score").text(yourScore);
        targetScore = randomNumber(19, 120);
        $("#target-score").text(targetScore);
    }

    function gameResults() {
        if (yourScore === targetScore) {
            numberWins++
            $("#number-wins").text(numberWins);
            setTimeout(function () {
                alert("You won the game!!");
            }, 30);
            setTimeout(function () {
                restartGame();
            }, 30);
        } else if (yourScore > targetScore) {
            numberLosses++
            $("#number-losses").text(numberLosses);
            setTimeout(function () {
                alert("You lost the game.");
            }, 30);
            setTimeout(function () {
                restartGame();
            }, 30);
        }
    }
});







