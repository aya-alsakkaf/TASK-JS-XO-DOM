// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window 
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

let player = "X";
let counter = 0;
function clickButton(index) {
  if (player == "X" && document.getElementById(index).innerHTML == '') {
    fillButton(index, "X");
    player = "O";
    counter++;
  } else if (player == "O" && document.getElementById(index).innerHTML == '') {
    fillButton(index, "O");
    player = "X";
    counter++;
  }
  checkWinner()
  console.log(`Button number ${index} is clicked`);

  // Your main code here.
}

function checkWinner() {
  winnerStream = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [3, 6, 9],
    [3, 5, 7],
    [2, 5, 8],
    [4, 5, 6],
    [7, 8, 9]
  ]
  if (counter == 9) {
    for (let i = 0; i < winnerStream.length; i++) {
      block = winnerStream[i]
      b1 = document.getElementById(block[0]).innerHTML
      b2 = document.getElementById(block[1]).innerHTML
      b3 = document.getElementById(block[2]).innerHTML
      if (b1 == b2 && b1 == b3) {
        winningAlert(b1);
        break;
      }

    }
  }
}

function restartGame() {
  location.reload()
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
