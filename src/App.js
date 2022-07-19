//CSS
import './App.css';

//REACT
import {useCallback, useEffect, useState} from "react";

//data
import {wordsList} from "./data/words";

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage]= useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickeWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [ Letters, setLetters] = useState([]);

  const pickWordAndCategory =() =>{
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return{word, category};
  }

  //starts The secret word game
  const startGame = () =>{
    //pick word and pick category
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category,wordLetters);

    //fill states
    setPickeWord(word);
    setPickedCategory(category);
    setLetters(Letters);
    setGameStage(stages[1].name);
  }

  //process the letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
  }

  //restars the game
  const retry =() =>{
    setGameStage(stages[0].name);
  }


  
  return (
    <div className="App">
      {gameStage === 'start' &&   <StartScreen startGame={startGame}/>}
      {gameStage === 'game' &&   <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' &&   <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
