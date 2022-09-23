import React, { useState } from "react"
import styled from "styled-components"

import letters from "./keys"
import words from "./palavras"


import gallow0 from "./images/gallow0.png"
// import gallow1 from "./images/gallow1.png"
// import gallow2 from "./images/gallow2.png"
// import gallow3 from "./images/gallow3.png"
// import gallow4 from "./images/gallow4.png"
// import gallow5 from "./images/gallow5.png"
// import gallow6 from "./images/gallow6.png"

export default function App() {

    const [word, setWord] = useState("")
    const [gameStarted, setGameStarted] = useState(false)
    const [randomWordArray, setRandomWordArray] = useState("")
    const [clickedKeys, setClickedKeys] = useState([])
    // let newarray = []

    const [textInput, setTextInput] = useState("")

    function selectingWord() {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setRandomWordArray([...randomWord]);

        const underlines = ("_".repeat([...randomWord].length))
        setWord([...underlines])

        setGameStarted(true)
    }

    function letterCheckMouse(l) {
        setClickedKeys([...clickedKeys, l])

        // randomWordArray.forEach((e) => {
        //     (e === l && !clickedKeys.contains(l)) ? : ;
        // });
        // setWord(newarray)
    }
    function guessing() {

        const answer = randomWordArray.join("")
        textInput === answer ? alert('you win') : alert('you lose')

        setTextInput("")
    }

    return (
        <Main>
            <div className="images">
                <img className="gallow" src={gallow0} alt="" />
                <button onClick={selectingWord} className="choose-word"> Escolher Palavra </button>
                <h1 className="chosen-word">{word}</h1>
            </div>
            <div className="keyboard">
                {letters.map((l, index) =>
                    <button
                        onClick={() => letterCheckMouse(l)}
                        key={index}
                        className={gameStarted === true ? clickedKeys.includes(l) ? "keys unclickable" : "keys game-started" : "keys unclickable"}
                    >
                        {l.toUpperCase()}
                    </button>)}
            </div>
            <div className="guess">
                <p> Já sei a palavra! </p>
                <input
                    onChange={(event) => setTextInput(event.target.value)}
                    value={textInput}
                />
                <button onClick={guessing}> Chutar </button>
            </div>
        </Main>
    )
}

const Main = styled.main`
    flex-direction: column;
    align-items: center;
`