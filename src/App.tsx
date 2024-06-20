import './App.css';
import { RandomNumberPicker } from './RandomNumberPicker';
import { ScoreInputForm } from './ScoreInputForm';
import { ResultButton } from './ResultButton';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { ResultList } from './ResultList';

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
    const [scores, setScores] = useState<TeamInfo[]>([{ name: '', score: 0 }]);
    const [result, setResult] = useState<ResultInfo[]>([{ name: '', score: 0, diff: 0 }]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const generateRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER);
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
        setScores([...scores, { name: '', score: 0 }]);
    };

    const setTeamName = (index: number, name: string) => {
        const updatedScores = scores.map((team, idx) => (idx === index ? { ...team, name } : team));
        setScores(updatedScores);
    };

    const setTeamScore = (index: number, score: number) => {
        const updatedScores = scores.map((team, idx) =>
            idx === index ? { ...team, score } : team,
        );
        setScores(updatedScores);
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
            <section>
                <RandomNumberPicker
                    randomNumber={randomNumber}
                    generateRandomNumber={generateRandomNumber}
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
                <Modal onClose={toggleModal}>
                    <ResultList randomNumber={randomNumber} result={result} />
                </Modal>
            )}
        </div>
    );
}

export default App;
