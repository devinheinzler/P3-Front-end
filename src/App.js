import logo from './logo.svg';
import './App.css';
import MemeContainer from './MemeContainer';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Nav from './Nav';
import MemeForm from './MemeForm';

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
      <>
      <Nav/>
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/"> <Home/></Route>
      <Route path="/memes"> <MemeContainer/></Route>
      <Route path= "/MemeForm"> <MemeForm/></Route>
      </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
