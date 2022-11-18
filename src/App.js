import logo from './logo.svg';
import './App.css';
import MemeContainer from './MemeContainer';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home';

function App() {

//   const [memes, setMemes] = useState([])
// useEffect (() => {
//     fetch("http://localhost:9292/memes")
//     .then((r) => r.json())
//     .then(setMemes) 
// }, [])

// function handleUpdateMeme(updatedMeme) {
//   const updatedMemes = memes.map((meme) =>
//     meme.id === updatedMeme.id ? updatedMeme : meme
//   );
//   setMemes(updatedMemes);
// }

  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" element = {<Home/>}/>
      <Home/>
      <Route path="/memes" element = {<MemeContainer/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
