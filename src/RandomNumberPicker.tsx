import { useState } from 'react';
import styled from 'styled-components';

const MIN_NUMBER = 1;
const MAX_NUMBER = 999;

export const RandomNumberPicker = () => {
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const generateRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER);
    };

    return (
        <Container>
            <RandomNumber>{randomNumber}</RandomNumber>
            <Button onClick={generateRandomNumber}>Pick Number ! 🎰</Button>
        </Container>
    );
};

const Container = styled.div`
    width: 880px;
    height: 150px;
    margin: 0 auto;
    padding: 40px;
`;

const RandomNumber = styled.h1`
    font-size: 48px;
    font-weight: bold;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    background-color: #df0809;
    color: #fff;
`;
