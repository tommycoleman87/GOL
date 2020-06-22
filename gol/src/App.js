import React, {useState} from 'react';
import './App.css';
import Cell from './cell/Cell'
import {Row} from './row/rowStyle'
function App() {
  const [grid, setGrid] = useState([[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false]])

  const toggleCell = (x, y) => {
    let newGrid = [...grid]
    newGrid[y][x] = !newGrid[y][x]
    setGrid([...newGrid])
  }
  return (
    <div className="App">
      
      {grid.map((arr, y) => {
        return ( <Row>
        {arr.map((cell, x) => {
          console.log(y, x)
          return <Cell live={cell} onClick={e => toggleCell(x, y)}/>
        })}
        </Row>
        )
   
      })}
    </div>
  );
}

export default App;
