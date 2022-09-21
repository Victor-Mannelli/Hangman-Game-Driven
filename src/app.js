import React from "react"
import Keyboard from "./letras"

import forca0 from "./imagens/forca0.png"
// import forca1 from "./imagens/forca1.png"
// import forca2 from "./imagens/forca2.png"
// import forca3 from "./imagens/forca3.png"
// import forca4 from "./imagens/forca4.png"
// import forca5 from "./imagens/forca5.png"
// import forca6 from "./imagens/forca6.png"



export default function App(){
    return (
        <main> 
            <div className="images">
                <img className="gallow" src={forca0} alt=""/>
                <button className="choose-word"> Escolher Palavra </button>
                <h1 className="chosen-word">_______</h1>
            </div>
            <Keyboard />
            <div className="guess">
                <p> Já sei a palavra! </p>
                <input/>
                <button> Chutar </button>
            </div>
        </main>
    )
} 