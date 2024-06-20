import styled from 'styled-components';

interface IProps {
    randomNumber: number;
    generateRandomNumber: () => void;
}

export const RandomNumberPicker = (props: IProps) => {
    const { randomNumber, generateRandomNumber } = props;

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
    background-color: #eee;
    color: #df0011;
`;
