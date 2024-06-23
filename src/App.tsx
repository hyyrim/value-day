import './App.css';
import { RandomNumberPicker } from './RandomNumberPicker';
import { ScoreInputForm } from './ScoreInputForm';
import { ResultButton } from './ResultButton';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { ResultList } from './ResultList';
import styled from 'styled-components';

export interface TeamInfo {
    name: string;
    score: number;
}

export interface ResultInfo extends TeamInfo {
    diff: number;
}

export const MIN_NUMBER = 100;
export const MAX_NUMBER = 900;

function App() {
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [scores, setScores] = useState<TeamInfo[]>([
        { name: '', score: 0 },
        { name: '', score: 0 },
        { name: '', score: 0 },
        { name: '', score: 0 },
        { name: '', score: 0 },
    ]);
    const [result, setResult] = useState<ResultInfo[]>([{ name: '', score: 0, diff: 0 }]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
    };

    const handleGenerateRandomNumber = () => {
        const interval = setInterval(() => {
            setRandomNumber(generateRandomNumber());
        }, 50); // 0.05초마다 번호 변경

        setTimeout(() => {
            clearInterval(interval);
            setRandomNumber(generateRandomNumber());
        }, 300); // 0.3초 후에 최종 번호 설정
    };

    const sortScoresByClosest = () => {
        const sortedScores = [...scores]
            .map((team) => ({
                ...team,
                diff: Math.abs(team.score - randomNumber),
            }))
            .sort((a, b) => a.diff - b.diff);

        setResult(sortedScores);
    };

    const addInput = () => {
        if (scores.length === 10) {
            alert('10개의 팀까지만 등록 가능합니다.');
            return;
        }
        setScores([...scores, { name: '', score: 0 }]);
    };

    const resetInput = () => {
        setScores([
            { name: '', score: 0 },
            { name: '', score: 0 },
            { name: '', score: 0 },
            { name: '', score: 0 },
            { name: '', score: 0 },
        ]);
        setRandomNumber(0);
    };

    const setTeamName = (index: number, name: string) => {
        const updatedScores = scores.map((team, idx) => (idx === index ? { ...team, name } : team));
        setScores(updatedScores);
    };

    const setTeamScore = (index: number, value: string) => {
        const newScores = [...scores];
        const numericValue = value === '' ? 0 : Number(value);
        if (!isNaN(numericValue) && /^[0-9]*$/.test(value)) {
            newScores[index].score = numericValue;
            setScores(newScores);
        }
    };

    const handleShowResults = () => {
        if (!scores[0].score) {
            alert('점수를 입력해주세요!');
            return;
        }
        if (!scores[0].name) {
            alert('이름을 입력해주세요!');
            return;
        }

        sortScoresByClosest();
        toggleModal();
    };

    return (
        <div className="App">
            <Container>
                <section>
                    <RandomNumberPicker
                        randomNumber={randomNumber}
                        generateRandomNumber={handleGenerateRandomNumber}
                    />
                </section>
                <section>
                    <ScoreInputForm
                        addInput={addInput}
                        setTeamName={setTeamName}
                        setTeamScore={setTeamScore}
                        scores={scores}
                    />
                    <ResultButton handleShowResults={handleShowResults} />
                </section>
                {isModalOpen && (
                    <Modal onClose={toggleModal} reset={resetInput}>
                        <ResultList randomNumber={randomNumber} result={result} />
                    </Modal>
                )}
            </Container>
            <span>온라인프론트개발팀</span>
        </div>
    );
}

export default App;

const Container = styled.div`
    position: relative;
    width: 500px;
    height: 100vh;
    margin: 0 auto;
    background: #333;
`;
