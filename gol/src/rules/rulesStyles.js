import styled from 'styled-components'

export const RulesContainer = styled.div`
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
    @media (min-width: 800px) {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
    @media (min-width: 1000px) {
        border-radius: 10px 0 0 10px;
        width: 250px;
        border: 2px solid black;
        border-right: none;
      
    }
`