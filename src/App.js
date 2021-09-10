import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import Details from './components/Details';
import { response } from 'msw';
import { set } from 'msw/lib/types/context';

export default function App (){
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [error, setError] = useState(null);


  const openDetails = (id) =>{
  const character = characters.filter(item => item.id === id);
  setCurrentCharacter(character);
};
  const closeDetails = () =>{
    setCurrentCharacter(null);
  };
  useEffect(() => {
    console.log("Getting the characters...");
    axios.get("https://swapi.dev/api/people")
    .then(response => {
      const characters = response.data;
      let id = 1;
      characters.forEach(item => item.id = id++);
      console.log(characters);
      setCharacters(characters);
    })
    .catch(err =>{
      console.error(err);
      setError(err);
    })
  });
}


