import styled from 'styled-components'

export const CellContainer = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${props => props.live ? 'black' : 'white'};
    border: .5px solid black;

    @media (min-width: 500px) {
        width: 20px;
        height: 20px;
    }
`