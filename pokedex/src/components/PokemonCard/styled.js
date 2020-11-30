import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    width: 300px;
    height: 360px;
    border-radius: 15px;
    margin-top: 10px;
    box-shadow: 10px 5px 5px black;

    p{
        font-size: 22px;
        text-transform: uppercase;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 100px;
    border-top: 3px solid #d50000;
`

export const Button = styled.button`
    padding: 5px;
    cursor: pointer;
`