import { WINNER_COMBOS } from "../constants"
export const checkWinnerFrom = (boardToCheck) => {
    // we check if there is a winner
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
    if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
        return boardToCheck[a]
        }
    }
    // if not there winner
    return null
}

export const checkEndGame = (newBoard) => {
    // check if there tie (if not null field in board)
    return newBoard.every(square => square != null);
}
