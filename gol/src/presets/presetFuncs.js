export const blinker = grid => {
    let board = [...grid]
    board[12][12] = true
    board[12][11] = true
    board[12][13] = true
    return board
}

export const pulsar = grid => {
    console.log(grid)
    let board = [...grid]
    board[5][10] = true
    board[5][9] = true
    board[5][8] = true

    board[5][14] = true
    board[5][15] = true
    board[5][16] = true

    board[7][6] = true
    board[8][6] = true
    board[9][6] = true

    board[7][11] = true
    board[8][11] = true
    board[9][11] = true

    board[7][13] = true
    board[8][13] = true
    board[9][13] = true

    board[7][18] = true
    board[8][18] = true
    board[9][18] = true

    board[7][11] = true
    board[8][11] = true
    board[9][11] = true

    board[10][10] = true
    board[10][9] = true
    board[10][8] = true

    board[10][14] = true
    board[10][15] = true
    board[10][16] = true

    board[12][10] = true
    board[12][9] = true
    board[12][8] = true

    board[12][14] = true
    board[12][15] = true
    board[12][16] = true

    board[13][6] = true
    board[14][6] = true
    board[15][6] = true

    board[13][11] = true
    board[14][11] = true
    board[15][11] = true

    board[13][13] = true
    board[14][13] = true
    board[15][13] = true

    board[13][18] = true
    board[14][18] = true
    board[15][18] = true

    board[17][10] = true
    board[17][9] = true
    board[17][8] = true

    board[17][14] = true
    board[17][15] = true
    board[17][16] = true

    return board
}

export const startingBoard = grid => {
    let board = [...grid]
    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid.length; x++) {
            board[y][x] = false
        }
    }
    return board
}

export const randomBoard = grid => {
    let board = [...grid]
    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid.length; x++) {
            let toggleCell = Math.floor(Math.random() * 10)
            if(toggleCell < 2) {
                board[y][x] = true
            }
        }
    }

    return board
}