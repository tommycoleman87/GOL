export const blinker = (grid) => {
    let board = [...grid]
    board[12][12] = true
    board[12][11] = true
    board[12][13] = true
    return board
}