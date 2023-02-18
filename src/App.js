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
  const [gameControl, setgameControl] = useState(false);
  const [gameResult, setGameResult] = useState('ongoing')
  const [rightLetters, setRightLetters] = useState([]);

  function sortWord() {
    const selectedWordIndex = Math.floor(Math.random() * palavras.length);
    const selectedWord = palavras[selectedWordIndex];
    const selectedWordArray = Array.from(selectedWord);
    setMainWord(selectedWordArray);
    setChoosenLetters([]);
    setErrors(0);
    setgameControl(false);
    setGameResult('ongoing');
    setRightLetters(Array(selectedWordArray.length));
  }

  function pickingALetter(letter) {
    setChoosenLetters([...choosenLetters, letter]);
    if (mainWord.includes(letter)) {
      const arrayRight = rightLetters;
      mainWord.forEach((c, index) => c === letter && (arrayRight[index] = letter));
      setRightLetters(arrayRight)
      if (arrayRight.join('') === mainWord.join('')) {
        setgameControl(true);
        setGameResult('win')
      }
    } else {
      const errorCount = errors + 1;
      setErrors(errorCount)
      if (errorCount === 6) {
        setgameControl(true);
        setGameResult('lose')
      }
    }
  }
  return (
    <Layout>
      <Jogo mainWord={mainWord} onClick={sortWord} errors={errors} choosenLetters={choosenLetters} gameResult={gameResult} />
      <Letras startGame={mainWord.length !== 0} onClick={pickingALetter} choosenLetters={choosenLetters} gameControl={gameControl} />
    </Layout>
  );
}

export default App;