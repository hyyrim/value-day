import React from 'react';
import { ResultInfo } from './App';
import styled from 'styled-components';

interface IProps {
    randomNumber: number;
    result: ResultInfo[];
}

export const ResultList = (props: IProps) => {
    const { randomNumber, result } = props;

    return (
        <Container>
            <h2>Result</h2>
            <h3>Random Number: {randomNumber}</h3>
            <OL>
                {result.map((i) => (
                    <UL>
                        <LI>{i.name}</LI>
                        <LI>{i.score}</LI>
                        <LI>{i.diff}</LI>
                    </UL>
                ))}
            </OL>
        </Container>
    );
};

const Container = styled.div``;

const OL = styled.ol``;

const UL = styled.ul`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    padding: 20px;
`;

const LI = styled.li``;
