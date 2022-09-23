import { useState, useEffect} from "react"
import styled from "styled-components"

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
        if (!word.includes("_") && counter < word.length){

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
    }, [counter])

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
            <div className="images">
                <img className="gallow" src={gallows[counter]} alt="" />
                <button onClick={selectingWord} className="choose-word"> Escolher Palavra </button>
                <h1 className={wordClass}>{word}</h1>
            </div>
            <div className="keyboard">
                {letters.map((l, index) =>
                    <button
                        onClick={() => letterCheckMouse(l)}
                        key={index}
                        className={gameSet === true ? clickedKeys.includes(l) ? "keys unclickable" : "keys game-started" : "keys unclickable"}
                    >
                        {l.toUpperCase()}
                    </button>)}
            </div>
            <div className="guess">
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
            </div>
        </Main>
    )
}

const Main = styled.main`
    flex-direction: column;
    align-items: center;
`