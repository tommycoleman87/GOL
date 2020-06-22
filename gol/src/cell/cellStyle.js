import styled from 'styled-components'

export const CellContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.live ? 'black' : 'white'};
    border: 1px solid black;
`