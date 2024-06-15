let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");

function playerTurn(index) {
    if (!gameOver && board[index] === "") {
        board[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            message.innerText = ` Yay!! Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkDraw()) {
            message.innerText = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            message.innerText = `Your turn`;
            if (currentPlayer === "O") {
                computerTurn();
            }
        }
    }
}

function computerTurn() {
    let index = Math.floor(Math.random() * 9);
    while (board[index] !== "") {
        index = Math.floor(Math.random() * 9);
    }
    playerTurn(index);
}

function checkWin(player) {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function checkDraw() {
    return board.every(cell => {
        return cell !== "";
    });
}

function reset() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "O";
    gameOver = false;
    cells.forEach(cell => {
        cell.innerText = "";
    });
    message.innerText = "Your turn!";
}
