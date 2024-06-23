import styled from 'styled-components';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IProps {
    randomNumber: number;
    generateRandomNumber: () => void;
}

export const RandomNumberPicker = (props: IProps) => {
    const { randomNumber, generateRandomNumber } = props;

    return (
        <Container>
            <RandomNumber>{randomNumber}</RandomNumber>
            <Button onClick={generateRandomNumber}>
                <FontAwesomeIcon icon={faRotate} />
            </Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 60px 0;
`;

const RandomNumber = styled.h1`
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 3.2px;
    background-color: #fff;
    color: #df0011;
    width: 185px;
    border-radius: 4px 0 0 4px;
    padding-left: 15px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 0 4px 4px 0;
    font-size: 16px;
    font-weight: 600;
    background: #333;
`;
