import { Game } from "../assets/css/styles";
import forca0 from '../assets/imgs/forca0.png';
import forca1 from '../assets/imgs/forca1.png';
import forca2 from '../assets/imgs/forca2.png';
import forca3 from '../assets/imgs/forca3.png';
import forca4 from '../assets/imgs/forca4.png';
import forca5 from '../assets/imgs/forca5.png';
import forca6 from '../assets/imgs/forca6.png';

const imgs = {
    img0: forca0,
    img1: forca1,
    img2: forca2,
    img3: forca3,
    img4: forca4,
    img5: forca5,
    img6: forca6
}

export default function Jogo() {
    return (
        <Game>
            <img src={imgs.img0} />
            <button>Escolher Palavra</button>
        </Game>
    )
}