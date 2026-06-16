let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#RESET-BUTTON");

let turnO = true;

let player1Score = 0;
let player2Score = 0;

let player1 = document.querySelector("#player1-score");
let player2 = document.querySelector("#player2-score");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Enable all boxes and clear board
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("winner");
    });
};

// Reset game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    const resetGame = () => {
    turnO = true;
    winnerMsg.innerText = "";
    enableBoxes();
};
};


resetButton.addEventListener("click", resetGame);

// Check winner
const checkWinner = () => {

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

    // Add winner effect
    boxes[pattern[0]].classList.add("winner");
    boxes[pattern[1]].classList.add("winner");
    boxes[pattern[2]].classList.add("winner");

            if (pos1 === "O") {
    player1Score++;
    player1.innerText = player1Score;
    winnerMsg.innerText = "🏆 O Wins!";
} else {
    player2Score++;
    player2.innerText = player2Score;
    winnerMsg.innerText = "🏆 X Wins!";
}
        }
    }
};


// Box click events
boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();

    });

});


let winnerMsg = document.querySelector("#winner-msg");

