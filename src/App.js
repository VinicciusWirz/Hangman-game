import "./assets/css/reset.css"
import { GlobalStyle, Layout } from './assets/css/styles';
import palavras from './palavras';
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";


function App() {
  const [errors, setErrors] = useState(0);
  const [mainWord, setMainWord]  = useState([]);
  const [chosenWord, setChosenWord] = useState('');
  
  function sortWord(){
    const selectedWordIndex = Math.floor(Math.random()*palavras.length);
    const selectedWord = palavras[selectedWordIndex];
    const selectedWordArray = Array.from(selectedWord);
    setMainWord(selectedWordArray);
    setErrors(0);
    setChosenWord(selectedWord);
  }
  
  return (
    <>
    <GlobalStyle />
    <Layout>
      <Jogo mainWord={mainWord} onClick={sortWord} errors={errors}/>
      <Letras startGame={mainWord.length !== 0}/>
    </Layout>
    </>
  );
}

export default App;