// Waity for the DOM to finiSh loading before running the game
// Get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {                      //function is called when event is triggered
    let buttons = document.getElementsByTagName("button");                      // retrieves all button elements from html and stores them as an array in button variable

    for (let button of buttons) {                                               //iterates through all buttons and makes sure they are induvidually handled
        button.addEventListener("click", function() {                           //when the button is clicked, function is called
            if (this.getAttribute("data-type") === "submit") {                  //"this" refers to button that was clicked, retrieves the value of the data-type attribute of the clicked button - if equals "submit" displays pop-up message
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition"); 

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

// Creates twi random numbers between 1 and 2
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
} else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
}

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+"

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}


