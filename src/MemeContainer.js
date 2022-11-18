import React, {useEffect, useState} from "react";
import MemeCard from "./MemeCard";
import './MemeContainer.css'
import {Card} from 'semantic-ui-react'




function MemeContainer() {
    
// const [memes, setMemes] = useState([])
// useEffect (() => {
//     fetch("http://localhost:9292/memes")
//     .then((r) => r.json())
//     .then(memeData => console.log(memeData)) 
// }, [])

// console.log("anything")


function getMemes() {
  fetch("http://localhost:9292/memes")
  .then((r) => r.json())
  .then(setMemes) 
}

const [memes, setMemes] = useState([])
useEffect (() => {
getMemes()
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

function handleDeleteMeme(memeToDelete) {
    const updatedMemes = memes.filter((meme) => meme.id !== memeToDelete.id);
    setMemes(updatedMemes);
  }

const memeCards = memes.map((meme) => ( 
<MemeCard 
    key = {meme.id}
    meme= {meme}
    onUpdateMeme = {handleUpdateMeme}
    onDeleteMeme = {handleDeleteMeme}
/>
))

return (
<div className="meme-collection">{memeCards}</div>
)

}


export default MemeContainer