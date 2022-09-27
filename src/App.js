import {useState, useEffect} from "react"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyles"

import letters from "./Letters"
import words from "./Words"
// import EnWords from "./EnWords"

import { Guess } from "./Guess"
import Keyboard from "./Keyboard"
import Images from "./Images"

import gallow0 from "./images/gallow0.png"
import gallow1 from "./images/gallow1.png"
import gallow2 from "./images/gallow2.png"
import gallow3 from "./images/gallow3.png"
import gallow4 from "./images/gallow4.png"
import gallow5 from "./images/gallow5.png"
import gallow6 from "./images/gallow6.png"
const gallows = [gallow0, gallow1, gallow2, gallow3, gallow4, gallow5, gallow6]

export default function App() {

    const [word, setWord] = useState("");
    const [gameSet, setGameSet] = useState(false);
    const [randomWordArray, setRandomWordArray] = useState("");
    const [clickedKeys, setClickedKeys] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [counter, setCounter] = useState(0);
    const [wordState, setWordState] = useState("game-in-progress");
    const [choseWord, setChoseWord] = useState("Jogar");
    const [focus, setFocus] = useState(false)

    function selectingWord() {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setRandomWordArray([...randomWord]);

        const underlines = ("_".repeat([...randomWord].length))
        setWord([...underlines])

        setGameSet(true)
        setCounter(0)
        setWordState("game-in-progress")
        setTextInput("")
        setClickedKeys([])
        setChoseWord("Recomeçar")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function letterCheckMouse(l) {
        setClickedKeys([...clickedKeys, l])
    
        let answer = randomWordArray.join("")
        answer = answer.replace(new RegExp(/[àáâãäå]/g),"a");
        answer = answer.replace(new RegExp(/[èéêë]/g),"e");
        answer = answer.replace(new RegExp(/[ìíîï]/g),"i");
        answer = answer.replace(new RegExp(/[òóôõö]/g),"o");
        answer = answer.replace(new RegExp(/[ùúûü]/g),"u");
        answer = answer.replace(new RegExp(/[ç]/g),"c");
        let answerArray = [...answer]

        answerArray.forEach((e, index) => {
            if (e === l) {
                word[index] = randomWordArray[index]
            } 
        });
        if (!answerArray.includes(l)){
            setCounter(counter + 1)
        } 
        let newarray = [...word]
        setWord(newarray)
    }
    
    useEffect(() => {
        function handleClick(letter) {
            if(clickedKeys.includes(letter.key) || randomWordArray.length === 0 || counter >= 6 || !word.includes("_") || focus === true) return 
            letterCheckMouse(letter.key)
        }
        window.addEventListener("keypress", handleClick);

        return () => {
            window.removeEventListener("keypress", handleClick);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clickedKeys, letterCheckMouse, randomWordArray.length]);

    useEffect(() => {
        if (!word.includes("_") && counter !== 6){
            setWordState("won")
            setGameSet(false)
            setWord(randomWordArray)
            setChoseWord("Jogar")
            return
        }

        if (counter === 6){
            setWordState("lost")
            setGameSet(false)
            setWord(randomWordArray)
            setChoseWord("Jogar")
        }
    }, [clickedKeys, counter, randomWordArray, word])

    console.log(randomWordArray)
    function guessing() {
        const answer = randomWordArray.join("")
        if  (textInput.toLowerCase() === answer){
            setWordState("won") 
            setGameSet(false)
            setWord(randomWordArray)
        }  else {
            setCounter(6)
        }
    }

    return (
        <Main>
            <Images counter={counter} gallows={gallows} selectingWord={selectingWord} word={word} wordState={wordState} choseWord={choseWord}/>
            <Keyboard letterCheckMouse={letterCheckMouse} clickedKeys={clickedKeys} letters={letters} gameSet={gameSet} counter={counter}/>
            <Guess gameSet={gameSet} guessing={guessing} textInput={textInput} setTextInput={setTextInput} setFocus={setFocus}/>
            <GlobalStyle />
        </Main>
    )
}

const Main = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    @media(max-width: 520px) {
        height: 100%;
    }
`