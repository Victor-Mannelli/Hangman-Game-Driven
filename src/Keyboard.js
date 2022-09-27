import styled from "styled-components"

export default function Keyboard ({letterCheckMouse, clickedKeys, letters, gameSet}){
    return (
        <StyledKeyboard>
            {letters.map((l, index) =>
                <StyledKeys
                onClick = {() => letterCheckMouse(l)}
                key = {index}
                disabled = {!gameSet}
                gameStatus = {gameSet}
                clickedKeysList = {clickedKeys.includes(l)}
                data-identifier = "letter"
                > {l.toUpperCase()} </StyledKeys>)}
        </StyledKeyboard>
    )
}

const StyledKeyboard = styled.div `
    margin-top: 30px;
    width: 600px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 600px){
        width: 80vw;
    }
`
const StyledKeys = styled.button `
    width: 35px;
    height: 35px;
    margin: 5px;

    font-weight: 700;
    color: ${props => props.clickedKeysList ? "#696969" : props.disabled ? "#696969" : "#566f8f"}; 
    background-color: ${props => props.clickedKeysList ? "#8e9dac" : props.disabled ? "#8e9dac" : "#d1ebfb"};
    border: none;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    pointer-events: ${props => props.clickedKeysList ? "none" : "initial"};

    @media(max-width: 600px){
        width: 25px;
        height: 25px;
    }
    @media(max-width: 361px){
        width: 22.0px;
        height: 22.0px;
    }
`