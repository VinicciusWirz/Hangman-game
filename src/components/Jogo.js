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
            <img src={imgs[props.errors]} data-test="game-image" />
            <div>
                <button onClick={props.onClick} data-test="choose-word">Escolher Palavra</button>
                <p data-test="word">
                    {props.gameResult && props.rightLetters.map((l, index) => (
                        <Word
                            key={index}
                            index={index}
                            letter={l}
                            gameResult={props.gameResult}
                            rightLetters={props.rightLetters}
                            mainWord={props.mainWord}
                        />
                    ))}
                </p>
            </div>
        </Game>
    )
}

function Word({ letter, gameResult, mainWord, index }) {
    if (gameResult === 'ongoing') {
        return <span>{letter}</span>

    } else {
        return (
            <WordResult gameResult={gameResult}>{mainWord[index]}</WordResult>
        )
    }
}