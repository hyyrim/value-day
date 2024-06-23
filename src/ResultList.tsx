import React from 'react';
import { ResultInfo } from './App';
import styled from 'styled-components';

interface IProps {
    randomNumber: number;
    result: ResultInfo[];
}

const RANKING: Record<number, string> = {
    1: '1st',
    2: '2nd',
    3: '3rd',
    4: '4th',
    5: '5th',
    6: '6th',
    7: '7th',
    8: '8th',
    9: '9th',
    10: '10th',
};

export const ResultList = (props: IProps) => {
    const { randomNumber, result } = props;

    return (
        <Container>
            {/*<h2>Sorted Results</h2>*/}
            <div className="numberBg">
                <h2>Random Number: {randomNumber}</h2>
            </div>
            <ResultTable>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Team Name</th>
                        <th>Score</th>
                        <th>Difference</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, index) => (
                        <tr key={index}>
                            <td className="rank">
                                <strong>{RANKING[index + 1]}</strong>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                            <td>{item.diff}</td>
                        </tr>
                    ))}
                </tbody>
            </ResultTable>
        </Container>
    );
};

const Container = styled.div`
    h2 {
        font-size: 32px;
        padding: 20px;
    }
`;

const ResultTable = styled.table`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    border-collapse: separate;
    border-spacing: 0 20px;
    overflow-y: auto;
    thead {
        font-size: 20px;
        color: yellow;
    }
    tbody {
        font-size: 18px;
    }
    .rank {
        font-weight: bold;
    }
`;
