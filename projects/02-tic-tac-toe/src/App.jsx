import { useState } from "react"
import confetti from "canvas-confetti";

import { Square } from "./components/Square.jsx"
import { TURNS, WINNER_COMBOS } from "./constants";
import { checkWinnerFrom, checkEndGame } from './logic/board';
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js";

function App() {
const [board, setBoard] = useState(() => {
  const boardFromStorage = window.localStorage.getItem('board');
  return boardFromStorage ? JSON.parse(boardFromStorage) :
  Array(9).fill(null);
});
const [turn, setTurn] = useState(() => {
  const turnFromStorage = window.localStorage.getItem('turn');
  return turnFromStorage ?? TURNS.X
});
const [winner, setWinner] = useState(null); // null is that there is no winner, false is in case of a tie and true is if there is a winner

const updateBoard = (index) => {
// if there is any value in the position or if there winner exist, the board will not update (x or o)
  if(board[index] || winner) return;
  // update board
  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);
  // change turn
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; 
  setTurn(newTurn);
  // Save party
  saveGameToStorage({ 
    board:newBoard, 
    turn: newTurn
  })
  // exist a winner? 
  const newWinner = checkWinnerFrom(newBoard);
  if(newWinner) {
    confetti();
    setWinner(newWinner);
  } else if (checkEndGame(newBoard)) {
    setWinner(false);
  }
}

const resetGame = () => {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);

  resetGameStorage();
}

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={ winner } resetGame={ resetGame }/>
    </main>
  )
}

export default App
