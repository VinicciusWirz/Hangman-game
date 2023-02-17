import "./assets/css/reset.css"
import { GlobalStyle, Layout } from './assets/css/styles';
import palavras from './palavras';
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";


function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <Jogo palavras={palavras}/>
      <Letras/>
    </Layout>
    </>
  );
}

export default App;