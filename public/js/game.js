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
            if(currentPlayer === "X"){
                message.innerText = "Congo!!, But system says You Cheated..";
                gameOver = true;
            } else {
                message.innerText = "I promise not to brag about your loss !";
                gameOver = true;
            }
        } else if (checkDraw()) {
            message.innerText = "It's a draw. No chance to win !";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            message.innerText = "Your turn ";
            if (currentPlayer === "O") {
                computerTurn();
            }
        }
    }
}

function computerTurn() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            board[i] = "O";
            let score = minimax(board, 0, false);
            board[i] = "";
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    playerTurn(move);
}

function minimax(board, depth, isMaximizing) {
    if (checkWin("O")) {
        return 10 - depth;
    }
    if (checkWin("X")) {
        return depth - 10;
    }
    if (checkDraw()) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = "O";
                let score = minimax(board, depth + 1, false);
                board[i] = "";
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = "X";
                let score = minimax(board, depth + 1, true);
                board[i] = "";
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
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
    currentPlayer = "X";
    gameOver = false;
    cells.forEach(cell => {
        cell.innerText = "";
    });
    message.innerText = "Your turn!";
}
