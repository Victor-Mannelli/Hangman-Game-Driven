import styled from "styled-components"

export function Guess({gameSet, guessing, textInput, setTextInput}){

    return (
        <StyledGuess gameset = {!gameSet}>
            <p> Já sei a palavra! </p>
            <input
                onChange = {(event) => setTextInput(event.target.value)}
                value = {textInput}
                disabled = {!gameSet}
                tabIndex = {0}
                onKeyDown = {selector => selector.key === "Enter" ? guessing() : ""}
                data-identifier="type-guess"
            />
            <button 
                onClick = {guessing}
                disabled = {!gameSet} 
                data-identifier="guess-button"
            > Chutar </button>
        </StyledGuess>
    )
}
const StyledGuess = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    
    p, input, button {
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 300px;
        height: 35px;
        background-color: #fafafa;
        border-radius: 5px;
        border: 2px solid rgb(181, 181, 181);
        padding: 0 5px;
        outline-color: rgb(120, 120, 120);
    }
    button {
        width: 70px;
        height: 38px;
        border: 1px solid rgb(86, 111, 143);
        border-radius: 5px;
        background-color: ${props => props.gameset ? "#8e9dac" : "#d1ebfb"};

        font-weight: 700;
        letter-spacing: 1px;
        font-size: 14px;
        color: rgb(86, 111, 143);
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
`
