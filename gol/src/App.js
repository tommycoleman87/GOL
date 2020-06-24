import React, { useState, useEffect } from 'react';
import { AppContainer, PlayMenu, GameContainer, GridContainer } from './appStyles'
import Cell from './cell/Cell'
import { Row } from './rowStyle'
import { automata } from './automata/automata'

import Rules from './rules/Rules'
import Presets from './presets/Presets'

function App() {
  const [generation, setGeneration] = useState(0)
  const [play, setPlay] = useState(false)
  const [grid, setGrid] = useState(new Array(25).fill([]).map(row => new Array(25).fill(false)))

  useEffect(() => {
    if (play === true) {
      let playing = setInterval(() => {
        let newGrid = automata(grid)
        setGeneration(generation + 1)
        setGrid(newGrid)
      }, 1000)
      return () => clearInterval(playing)
    }
  }, [play, grid])

  const toggleCell = (x, y) => {
    if (play === false) {
      let newGrid = [...grid]
      newGrid[y][x] = !newGrid[y][x]
      setGrid([...newGrid])
    }
  }

  const clearBoard = () => {
    setGeneration(0)
    setGrid(grid.map(row => {
      return row.map(cell => {
        cell = false
        return cell
      })
    }))
  }



  return (
    <AppContainer>
      <h1>Conways Game of Life</h1>
      <p>Generation #{generation}</p>
      <GameContainer>
   
        <Rules />

        <GridContainer>

          {grid.map((arr, y) => {
            return (
              <Row key={`${y}`}>

                {arr.map((cell, x) => {
                  return <Cell live={cell} onClick={() => toggleCell(x, y)} key={`${x}${y}`} />
                })}

              </Row>
            )

          })}
        </GridContainer>
        <Presets board={grid} setBoard={setGrid} playing={play} />
      </GameContainer>
      <PlayMenu>
        {play ? null : <button onClick={() => clearBoard()}>Clear</button>}
        <button onClick={() => setPlay(!play)}>{play ? 'Pause' : 'Play'}</button>
      </PlayMenu>
    </AppContainer>
  );
}

export default App;
