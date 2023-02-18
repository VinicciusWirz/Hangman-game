import { Game, WordResult } from "../assets/css/styles";
import forca0 from '../assets/imgs/forca0.png';
import forca1 from '../assets/imgs/forca1.png';
import forca2 from '../assets/imgs/forca2.png';
import forca3 from '../assets/imgs/forca3.png';
import forca4 from '../assets/imgs/forca4.png';
import forca5 from '../assets/imgs/forca5.png';
import forca6 from '../assets/imgs/forca6.png';

const imgs = [
    forca0,
    forca1,
    forca2,
    forca3,
    forca4,
    forca5,
    forca6
]

export default function Jogo(props) {
    return (
        <Game>
            <img src={imgs[props.errors]} />
            <div>
                <button onClick={props.onClick}>Escolher Palavra</button>
                <p>
                    {props.mainWord.length === 0 ? <Word letter={0} /> : props.mainWord.map((l, index) => (
                    <Word 
                    key={index} 
                    letter={l} 
                    choosenLetters={props.choosenLetters} 
                    gameResult={props.gameResult}
                    />
                    ))}
                </p>
            </div>
        </Game>
    )
}

function Word({letter, choosenLetters, gameResult}) {
    if (letter === 0) {
        return;
    }
    if(gameResult !== 'ongoing'){
        return (
            <WordResult gameResult={gameResult}>{letter}</WordResult>
        )
    }
    if (choosenLetters.includes(letter) && gameResult === 'ongoing') {
        return (
            <span>{letter}</span>
        )
    } else {
        return (
            <span>_</span>
        )
    }
}