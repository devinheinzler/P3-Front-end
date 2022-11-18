import React, {useEffect, useState} from "react";
import MemeCard from "./MemeCard";




function MemeContainer() {
    
// const [memes, setMemes] = useState([])
// useEffect (() => {
//     fetch("http://localhost:9292/memes")
//     .then((r) => r.json())
//     .then(memeData => console.log(memeData)) 
// }, [])

// console.log("anything")

const [memes, setMemes] = useState([])
useEffect (() => {
    fetch("http://localhost:9292/memes")
    .then((r) => r.json())
    .then(setMemes) 
}, [])

// function handleAddMeme(newMeme) {
//     setMemes([...memes, newMeme]);
//   }

function handleUpdateMeme(updatedMeme) {
  const updatedMemes = memes.map((meme) =>
    meme.id === updatedMeme.id ? updatedMeme : meme
  );
  setMemes(updatedMemes);
}

const memeCards = memes.map((meme) => ( 
<MemeCard 
    key = {meme.id}
    meme= {meme}
    onUpdateMeme = {handleUpdateMeme}
/>
))

return (
<div className="meme-collection">{memeCards}</div>
)

}


export default MemeContainer