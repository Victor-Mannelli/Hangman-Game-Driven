import {useState, useEffect} from "react"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyles"

import letters from "./keys"
import words from "./palavras"

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
    const [wordClass, setWordClass] = useState("chosen-word")

    function selectingWord() {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setRandomWordArray([...randomWord]);

        const underlines = ("_".repeat([...randomWord].length))
        setWord([...underlines])

        setGameSet(true)
        setCounter(0)
        setWordClass("chosen-word")
        setTextInput("")
        setClickedKeys([])
    }
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
        let newarray = word
        setWord(newarray)
    }

    useEffect(() => {
        console.log(randomWordArray)
        if (!word.includes("_")){
            setWordClass("won")
            setGameSet(false)
            setWord(randomWordArray)
            return
        }

        if (counter === 6){
            setWordClass("lost")
            setGameSet(false)
            setWord(randomWordArray)
        }
    }, [clickedKeys, counter])

    function guessing() {

        const answer = randomWordArray.join("")
        if  (textInput === answer){
            setWordClass("won") 
            setGameSet(false)
            setWord(randomWordArray)
        }  else {
            setCounter(6)
        }
    }

    return (
        <Main>
            <Images>
                <Gallow src={gallows[counter]} alt=""/>
                <ChooseWord onClick={selectingWord}> Escolher Palavra </ChooseWord>
                <h1 className={wordClass}>{word}</h1>
            </Images>
            <Keyboard>
                {letters.map((l, index) =>
                    <button
                        onClick={() => letterCheckMouse(l)}
                        key={index}
                        className={gameSet === true ? (clickedKeys.includes(l) ? "keys unclickable" : "keys game-started") : "keys unclickable"}
                    > {l.toUpperCase()} </button>)}
            </Keyboard>
            <Guess>
                <p> Já sei a palavra! </p>
                <input
                    onChange={(event) => setTextInput(event.target.value)}
                    value={textInput}
                    disabled = {gameSet === true ? false : true}
                />
                <button 
                    onClick={guessing}
                    disabled = {gameSet === true ? false : true}
                > Chutar </button>
            </Guess>
            <GlobalStyle />
        </Main>
    )
}

const Main = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
`
const Guess = styled.div `
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
        background-color: rgb(209, 235, 251);

        font-weight: 700;
        letter-spacing: 1px;
        font-size: 14px;
        color: rgb(86, 111, 143);
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
`
const Keyboard = styled.div `
    margin-top: 30px;
    width: 600px;
`
const Images = styled.div `
    width: 585px;
    flex-direction: row;
    position: relative;
`
const Gallow = styled.img `
    width: 250px;
    height: 320px;
`
const ChooseWord = styled.button `
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