import React, { useState } from "react"

import letters from "./keys"
import words from "./palavras"

import gallow0 from "./images/gallow0.png"
// import gallow1 from "./images/gallow1.png"
// import gallow2 from "./images/gallow2.png"
// import gallow3 from "./images/gallow3.png"
// import gallow4 from "./images/gallow4.png"
// import gallow5 from "./images/gallow5.png"
// import gallow6 from "./images/gallow6.png"

export default function App(){

    const [word, setWord] = useState("")
    const [cliclableClass, setClickableClass] = useState("keys unclickable")

    function selectingWord(){
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const randomWordArray = [...randomWord];
        setWord("_".repeat(randomWordArray.length))
        setClickableClass("keys game-started")
    }   

    function letterCheck(prop){
        console.log(prop)
    }

    return (
        <main> 
            <div className="images">
                <img className="gallow" src={gallow0} alt=""/>
                <button onClick={selectingWord} className="choose-word"> Escolher Palavra </button>
                <h1 className="chosen-word">{word}</h1>
            </div>
            <div className="keyboard"> 
                {letters.map((l,index) => <button onKeyDown={letterCheck} onClick={letterCheck} key={index} className={cliclableClass}> {l.toUpperCase()} </button>)}
            </div>
            <div className="guess">
                <p> Já sei a palavra! </p>
                <input/>
                <button> Chutar </button>
            </div>
        </main>
    )
} 