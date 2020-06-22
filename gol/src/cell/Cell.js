import React from 'react'
import {CellContainer} from './cellStyle'
const Cell = (props) => {
    return (
        <CellContainer live={props.live} onClick={props.onClick}><p>Hello</p></CellContainer>
    )
}

export default Cell