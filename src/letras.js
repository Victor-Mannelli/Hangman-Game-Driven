const letters =[
    
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
export default function Keyboard(){
    return (
        <div className="keyboard"> 
            {letters.map((l,index) => <button key={index} className="keys"> {l.toUpperCase()} </button>)}
        </div>
    )
}