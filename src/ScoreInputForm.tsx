import React from 'react';
import styled from 'styled-components';
import { MAX_NUMBER, MIN_NUMBER, TeamInfo } from './App';

interface IProps {
    addInput: () => void;
    setTeamName: (idx: number, value: string) => void;
    setTeamScore: (idx: number, value: number) => void;
    scores: TeamInfo[];
}

export const ScoreInputForm = (props: IProps) => {
    const { addInput, setTeamName, setTeamScore, scores } = props;

    return (
        <Container>
            {scores.map((team, index) => (
                <InputWrapper key={index}>
                    <div>
                        <Input
                            type="text"
                            value={team.name}
                            onChange={(e) => setTeamName(index, e.target.value)}
                        />
                        <span>팀</span>
                    </div>
                    <div>
                        <Input
                            type="text"
                            pattern={`₩d`}
                            maxLength={3}
                            value={team.score}
                            onChange={(e) => setTeamScore(index, Number(e.target.value))}
                        />
                        <span>점</span>
                    </div>
                </InputWrapper>
            ))}
            <Button onClick={addInput}>
                <span>+</span>
            </Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`;

const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Input = styled.input`
    width: 180px;
    padding: 10px;
    font-size: 16px;
    text-align: right;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 4px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid #ddd;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
        display: block;
    }
`;
