import React from 'react'
import {RulesContainer} from './rulesStyles'
const Rules = () => {
    return (
        <RulesContainer>
            <h2>Welcome to Conways Game of Life</h2>
            <h3>Rules</h3>
            <ul>
                <li>Dead cells are represented by white blocks</li>
                <li>Live Cells are represented by black cells</li>
                <li>After each update, any live cell with more than 3 live neighbors will die to overpopulation</li>
                <li>After each update, any live cell with less than 2 neighbors will die to starvation</li>
                <li>After each update any dead cell with exactly 3 live neighbors will come to life</li>
            </ul>
        </RulesContainer>
    )
}

export default Rules