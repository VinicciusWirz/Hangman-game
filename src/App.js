import "./assets/css/reset.css"
import { Layout } from './assets/css/styles';
import palavras from './palavras';
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";


function App() {
  const [errors, setErrors] = useState(0);
  const [mainWord, setMainWord] = useState([]);
  const [choosenLetters, setChoosenLetters] = useState([]);
  const [gameControl, setGameControl] = useState(false);
  const [gameResult, setGameResult] = useState('ongoing');
  const [rightLetters, setRightLetters] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function sortWord() {
    const selectedWordIndex = Math.floor(Math.random() * palavras.length);
    const selectedWord = palavras[selectedWordIndex];
    const selectedWordArray = Array.from(selectedWord);
    setMainWord(selectedWordArray);
    setChoosenLetters([]);
    setErrors(0);
    setGameControl(false);
    setGameResult('ongoing');
    setRightLetters(Array(selectedWordArray.length));
    setInputValue('');
  }

  function guess(input) {
    if (input === mainWord.join('')) {
      setGameControl(true);
      setGameResult('win');
    } else {
      setGameControl(true);
      setGameResult('lose');
      setErrors(6);
    }
  }

  function saveInput(l) {
    setInputValue(l);
  }

  function pickingALetter(letter) {
    setChoosenLetters([...choosenLetters, letter]);
    if (mainWord.includes(letter)) {
      const arrayRight = rightLetters;
      mainWord.forEach((c, index) => c === letter && (arrayRight[index] = letter));
      setRightLetters(arrayRight)
      if (arrayRight.join('') === mainWord.join('')) {
        setGameControl(true);
        setGameResult('win');
      }
    } else {
      const errorCount = errors + 1;
      setErrors(errorCount)
      if (errorCount === 6) {
        setGameControl(true);
        setGameResult('lose');
      }
    }
  }
  return (
    <Layout>
      <Jogo mainWord={mainWord}
        onClick={sortWord}
        errors={errors}
        choosenLetters={choosenLetters}
        gameResult={gameResult} />
      <Letras
        startGame={mainWord.length !== 0}
        onClick={pickingALetter}
        choosenLetters={choosenLetters}
        gameControl={gameControl}
        guess={guess}
        inputValue={inputValue}
        setInputValue={saveInput} />
    </Layout>
  );
}

export default App;