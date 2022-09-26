import styled from "styled-components"

export default function Keyboard ({letterCheckMouse, clickedKeys, letters, gameSet}){
    return (
        <StyledKeyboard>
            {letters.map((l, index) =>
                <StyledKeys
                    onClick = {() => letterCheckMouse(l)}
                    key = {index}
                    gameStatus = {gameSet}
                    clickedKeysList = {clickedKeys.includes(l)}
                    data-identifier="letter"
                > {l.toUpperCase()} </StyledKeys>)}
        </StyledKeyboard>
    )
}

const StyledKeyboard = styled.div `
    margin-top: 30px;
    width: 600px;
`
const StyledKeys = styled.button `

    width: 35px;
    height: 35px;
    margin: 5px;

    font-weight: 700;
    color: ${props => props.clickedKeysList ? "#696969" : props.gameStatus ? "#566f8f" : "#696969"}; 
    background-color: ${props => props.clickedKeysList ? "#8e9dac" : props.gameStatus ? "#d1ebfb" : "#8e9dac"};
    border: none;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    pointer-events: ${props => props.clickedKeysList ? "none" : "initial"};
`