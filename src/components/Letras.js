import { useState } from "react"
import { Btns, Choices } from "../assets/css/styles"

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
    const gameControl = props.gameControl;
    function Buttons(props) {
        const isDisabled = !props.startGame || props.choosenLetters.includes(props.letters);

        return (
            <Btns isDisabled={isDisabled || gameControl}
            disabled={isDisabled || gameControl}
            onClick={() => props.onClick(props.letters)}>
                    {props.letters.toUpperCase()}
            </Btns>
        )
    }

    return (
        <Choices startGame={!props.startGame}>
            {alfabeto.map((l) => <Buttons letters={l}
                key={l}
                startGame={props.startGame}
                choosenLetters={props.choosenLetters}
                onClick={props.onClick}
            />)}
        </Choices>
    )
}