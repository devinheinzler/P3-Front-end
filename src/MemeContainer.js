import React from "react";
import MemeCard from "./MemeCard";




function MemeContainer({memes, onUpdateMeme}) {
    
// const [memes, setMemes] = useState([])
// useEffect (() => {
//     fetch("http://localhost:9292/memes")
//     .then((r) => r.json())
//     .then(memeData => console.log(memeData)) 
// }, [])

// console.log("anything")

const memeCards = memes.map((meme) => ( 
<MemeCard 
    key = {meme.id}
    meme= {meme}
    onUpdateMeme = {onUpdateMeme}
/>

))

return <div className="meme-collection">{memeCards}</div>

}


export default MemeContainer