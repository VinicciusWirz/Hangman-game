import "./assets/css/reset.css"
import { GlobalStyle, Layout } from './assets/css/styles';
import palavras from './palavras';
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";


function App() {
  const [errors, setErrors] = useState(0);
  const [mainWord, setMainWord] = useState([]);
  const [choosenLetters, setChoosenLetters] = useState([]);
  let selectedWord = '';


  function sortWord() {
    const selectedWordIndex = Math.floor(Math.random() * palavras.length);
    selectedWord = palavras[selectedWordIndex];
    const selectedWordArray = Array.from(selectedWord);
    setMainWord(selectedWordArray);
    setChoosenLetters([]);
    setErrors(0);
  }

  function pickingALetter(letter) {
    setChoosenLetters([...choosenLetters, letter]);
    !mainWord.includes(letter) && setErrors(errors + 1);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Jogo mainWord={mainWord} onClick={sortWord} errors={errors} choosenLetters={choosenLetters} />
        <Letras startGame={mainWord.length !== 0} onClick={pickingALetter} choosenLetters={choosenLetters} />
      </Layout>
    </>
  );
}

export default App;