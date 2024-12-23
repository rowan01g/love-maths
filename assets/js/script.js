// Waity for the DOM to finiSh loading before running the game
// Get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {                      //function is called when event is triggered
    let buttons = document.getElementsByTagName("button");                      // retrieves all button elements from html and stores them as an array in button variable

    for (let button of buttons) {                                               //iterates through all buttons and makes sure they are induvidually handled
        button.addEventListener("click", function() {                           //when the button is clicked, function is called
            if (this.getAttribute("data-type") === "submit") {                  //"this" refers to button that was clicked, retrieves the value of the data-type attribute of the clicked button - if equals "submit" displays pop-up message
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition"); 

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

// Creates two random numbers between 1 and 25
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
}
else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
}
else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
}
else if (gameType === "division") {
    displayDivisionQuestion(num1, num2);
}
else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
}

}

/**
 * Check the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right!")
        incrementScore();
    }
    else {
        alert(`Awww... you answered ${userAnswer}. the correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands and the operator 
 * directly from the dom and returns the cprrect answer
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } 
    else if (operator === "x" ) {
        return [operand1 * operand2, "multiply"];
    }
    else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    }
    else if (operator === "%") {
        return [operand1 / operand2, "division"];
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}


/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 * operand2
    document.getElementById('operand2').textContent = operand2 
    document.getElementById('operator').textContent = "%";

}


