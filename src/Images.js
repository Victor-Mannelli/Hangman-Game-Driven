import styled from "styled-components";

export default function Images({counter, gallows, selectingWord, word, wordState, choseWord}){

    return (
        <StyledImages>
            <StyledGallow src={gallows[counter]} data-identifier="game-image" alt=""/>
            <StyledChooseWord onClick={selectingWord} data-identifier="choose-word"> {choseWord} </StyledChooseWord>
            <StyledWordGuessed youWin={wordState} data-identifier="word"> {word} </StyledWordGuessed>
        </StyledImages>
    )
}
const StyledImages = styled.div `
    width: 585px;
    flex-direction: row;
    position: relative;
`
const StyledGallow = styled.img `
    width: 250px;
    height: 320px;
`
const StyledChooseWord = styled.button `
    position: absolute;
    top: 20px;
    right: 0;

    width: 140px;
    height: 40px;
    border: none;
    border-radius: 7px;

    color: white;
    background-color: #27ae60;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-weight: 700;
`
const StyledWordGuessed = styled.h1 `

    position: absolute;
    bottom: 15px;
    right: 0;
    
    letter-spacing: ${props => props.youWin === "game-in-progress" ? "10px" : "0px"};
    font-size: 30px;

    color: ${props => props.youWin === "game-in-progress" ? "black" : props.youWin === "won" ? "#27ae60" : "red" }
`