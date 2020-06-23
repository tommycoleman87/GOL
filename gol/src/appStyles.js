import styled from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;


    
`

export const PlayMenu = styled.div`
    margin-top: 20px;
    width: 500px;
    display: flex;
    justify-content: space-around;

    button {
        background-color: white;
        width: 100px;
        border-radius: 10px;
        height: 25px;
    }
`

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;


    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
`