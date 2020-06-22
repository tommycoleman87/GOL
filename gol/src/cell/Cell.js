import React from 'react'
import {CellContainer} from './cellStyle'
const Cell = (props) => {
    return (
        <CellContainer live={props.live} onClick={props.onClick}></CellContainer>
    )
}

export default Cell