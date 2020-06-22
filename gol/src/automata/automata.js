
export const automata = (board) => {
    let grid = [...board]
    const updateBoard = (x, y) => {
        let value = grid[y][x]



        //this is the bounds of our x and y directions
        const max_direction = grid.length - 1

        //keep track of live neighbors
        let count = 0

        //check all the neighbors and store the count of live neighbors to determine next cell state
        //left neighbor
        if (x > 0) {
            let neighbor = grid[y][x - 1]
            if (neighbor === true || neighbor === -2) {
                count += 1
            }
        } else {
            let neighbor = grid[y][max_direction]
            if(neighbor === true || neighbor === -2) {
                count += 1
            }
        }

        //top left neighbor
        if (y > 0 && x > 0) {
            let neighbor = grid[y - 1][x - 1]

            if (neighbor === true || neighbor === -2) {
                count += 1
            }
        } 

        //top neighbor
        if (y > 0) {
            let neighbor = grid[y - 1][x]
            if (neighbor === true || neighbor === -2) {
                count += 1
            }
        } 

        //top right neighbor
        if (y > 0 && x < max_direction) {
            let neighbor = grid[y - 1][x + 1]
            if (neighbor === true || neighbor === -2) {
                count += 1
            }

        } 

        //right neighbor
        if (x < max_direction) {
            let neighbor = grid[y][x + 1]
            if (neighbor === true || neighbor === -2) {
                count += 1
            }
        }

        //bottom right neighbor
        if (x < max_direction && y < max_direction) {
            let neighbor = grid[y + 1][x + 1]
            if (neighbor === true || neighbor === -2) {
                count += 1
            }
        }

        //bottom neighbor
        if (y < max_direction) {
            let neighbor = grid[y + 1][x]
            if (neighbor === true || neighbor === -2) {
                count += 1
            }
        }

        //bottom left neighbor
        if (y < max_direction && x > 0) {
            let neighbor = grid[y + 1][x - 1]
            if (neighbor === true || neighbor === -2) {
                count += 1
            }
        }

       







        if (value === true) {
            if (count === 2 || count === 3) {
                grid[y][x] = true
            } else {
                grid[y][x] = -2
            }
        } else {
            if (count === 3) {
                grid[y][x] = 2
            }
        }

      
    }



    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++){
            updateBoard(x, y)
        }
    }

    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++){
            if(grid[y][x] === 2) {
                grid[y][x] = true
            } else if(grid[y][x] === -2) {
                grid[y][x] = false
            }


        }
    }
    return grid
}

