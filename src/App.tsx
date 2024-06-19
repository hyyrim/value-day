import './App.css';
import { RandomNumberPicker } from './RandomNumberPicker';
import { ScoreInputForm } from './ScoreInputForm';
import { RankingResult } from './RankingResult';
import { useState } from 'react';

export interface TeamInfo {
    name: string;
    score: number | string;
}

function App() {
    const [scores, setScores] = useState<TeamInfo[]>([{ name: '', score: '' }]);

    const addInput = () => {
        setScores([...scores, { name: '', score: '' }]);
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

    return (
        <div className="App">
            <section>
                <RandomNumberPicker />
            </section>
            <section>
                <ScoreInputForm
                    addInput={addInput}
                    setTeamName={setTeamName}
                    setTeamScore={setTeamScore}
                    scores={scores}
                />
                <RankingResult />
            </section>
        </div>
    );
}

export default App;
