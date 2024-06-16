import {useState} from "react";

const MIN_NUMBER = 1;
const MAX_NUMBER = 999;

export const RandomNumberPicker = () => {
    const [randomNumber, setRandomNumber] = useState<number>(0);
const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER)
}

    return <div>
        <h1>{randomNumber}</h1>
        <button onClick={generateRandomNumber}>Pick Number ! 🎰</button>
    </div>
}