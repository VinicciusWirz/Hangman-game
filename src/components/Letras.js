import { useState } from "react"
import { Btns, Choices, RandomGuess } from "../assets/css/styles"

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
    "z"];

export default function Letras(props) {
    return (
        <>
            <Choices startGame={!props.startGame}>
                {alfabeto.map((l) => <Buttons letters={l}
                    key={l}
                    startGame={props.startGame}
                    choosenLetters={props.choosenLetters}
                    onClick={props.onClick}
                    gameResult={props.gameResult}
                />)}
            </Choices>
            <RandomGuess>
                <p>Já sei a palavra!</p>
                <input onChange={(e) => props.setInputValue(e.target.value)}
                    value={props.inputValue}
                    disabled={(props.gameResult !== 'ongoing') || !props.startGame}
                    data-test="guess-input" />
                <button onClick={() => props.guess(props.inputValue)}
                    disabled={!props.inputValue}
                    data-test="guess-button">
                    Chutar
                </button>
            </RandomGuess>
        </>
    );
}

function Buttons(props) {
    const isDisabled = !props.startGame || props.choosenLetters.includes(props.letters);

    return (
        <Btns
            disabled={isDisabled || (props.gameResult !== 'ongoing')}
            onClick={() => props.onClick(props.letters)}
            data-test="letter">
            {props.letters.toUpperCase()}
        </Btns>
    );
}