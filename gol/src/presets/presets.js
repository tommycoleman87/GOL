import React from 'react'
import { PresetsContainer } from './presetStyles'
import { blinker, pulsar, startingBoard, randomBoard } from './presetFuncs'
const Presets = (props) => {

    const preset = (func) => {
        if(props.playing === false) {
            let clear = startingBoard(props.board)
            props.setBoard(clear)
        if(func === 'pulsar') {
            let newGrid = pulsar(props.board)
            props.setBoard(newGrid)
        } else if(func === 'blinker') {
            let newGrid = blinker(props.board)
            props.setBoard(newGrid)
        } else if(func === 'random') {
            let newGrid = randomBoard(props.board)
            props.setBoard(newGrid)
        }
    }
        
      }

    return (
        <PresetsContainer>
            <h2>Presets</h2>
            <ul>
                <li>
                    <button onClick={() => preset('pulsar')}>Pulsar</button>
                </li>
                <li>
                    <button onClick={() => preset('blinker')}>Blinker</button>
                </li>
                <li>
                    <button onClick={() => preset('random')}>Random</button>
                </li>
            </ul>
        </PresetsContainer>
    )
}

export default Presets