import "./assets/css/reset.css"
import { Layout } from './assets/css/styles';
import palavras from './palavras';
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";


export default function App() {
  const [errors, setErrors] = useState(0);
  const [mainWord, setMainWord] = useState([]);
  const [choosenLetters, setChoosenLetters] = useState([]);
  const [gameResult, setGameResult] = useState('start');
  const [rightLetters, setRightLetters] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const mainWordNormalized = mainWord.join('').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  function sortWord() {
    const selectedWordIndex = Math.floor(Math.random() * palavras.length);
    const selectedWord = palavras[selectedWordIndex];
    const selectedWordArray = Array.from(selectedWord);
    const emptyAnswerArray = Array(selectedWordArray.length);
    const answerArrayUnderline = placeUnderlines(emptyAnswerArray);
    setMainWord(selectedWordArray);
    setChoosenLetters([]);
    setErrors(0);
    setGameResult('ongoing');
    setRightLetters(answerArrayUnderline);
    setInputValue('');
  }

  function guess(input) {
    if (input.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === mainWordNormalized) {
      setGameResult('win');
    } else {
      setGameResult('lose');
      setErrors(6);
    }
  }

  function saveInput(l) {
    setInputValue(l);
  }

  function pickingALetter(letter) {
    setChoosenLetters([...choosenLetters, letter]);
    if (mainWordNormalized.includes(letter)) {
      const arrayRight = rightLetters;
      mainWord.forEach((c, index) => c.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === letter && (arrayRight[index] = c));
      setRightLetters(arrayRight);
      if (arrayRight.join('').normalize('NFD').replace(/[\u0300-\u036f]/g, '') === mainWordNormalized) {
        setGameResult('win');
      }
    } else {
      const errorCount = errors + 1;
      setErrors(errorCount)
      if (errorCount === 6) {
        setGameResult('lose');
      }
    }
  }

  return (
    <Layout>
      <Jogo
        mainWord={mainWord}
        onClick={sortWord}
        errors={errors}
        choosenLetters={choosenLetters}
        rightLetters={rightLetters}
        gameResult={gameResult} />
      <Letras
        startGame={mainWord.length !== 0}
        onClick={pickingALetter}
        choosenLetters={choosenLetters}
        gameResult={gameResult}
        guess={guess}
        inputValue={inputValue}
        setInputValue={saveInput} />
    </Layout>
  );
}

function placeUnderlines(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push('_')
  }
  return answer
}
