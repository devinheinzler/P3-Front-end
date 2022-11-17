import logo from './logo.svg';
import './App.css';
import MemeContainer from './MemeContainer';
import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {

  const [memes, setMemes] = useState([])
useEffect (() => {
    fetch("http://localhost:9292/memes")
    .then((r) => r.json())
    .then(setMemes) 
}, [])

function handleUpdateMeme(updatedMeme) {
  const updatedMemes = memes.map((meme) =>
    meme.id === updatedMeme.id ? updatedMeme : meme
  );
  setMemes(updatedMemes);
}

  return (
    <div className="App">
      <MemeContainer
        memes = {memes}
        onUpdateMeme = {handleUpdateMeme}
      />
    </div>
  );
}

export default App;
