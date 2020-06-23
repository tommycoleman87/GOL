import styled from 'styled-components'

export const PresetsContainer = styled.div`
    width: 90%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 2px solid black;
    border-radius: 10px;
    border-bottom: none;

    @media (min-width: 1000px) {
        border-radius: 0 10px 10px 0;
        width: 250px;
        border-left: none;
        border-bottom: 2px solid black;
    }
`