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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

// Creates twi random numbers between 1 and 2
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}


