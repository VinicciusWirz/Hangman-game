import { Choices } from "../assets/css/styles"

const alfabeto = ["a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"]

export default function Letras(props) {
    return (
        <Choices startGame={props.startGame}>
            {alfabeto.map((l) => <button key={l} disabled={!props.startGame}>{l.toUpperCase()}</button>)}
        </Choices>
    )
}