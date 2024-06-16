import './App.css';
import {RandomNumberPicker} from "./RandomNumberPicker";
import {ScoreInputForm} from "./ScoreInputForm";
import {RankingResult} from "./RankingResult";

function App() {
  return (
    <div className="App">
    <section>
      <RandomNumberPicker />
    </section>
      <section>
        <ScoreInputForm/>
        <RankingResult/>
      </section>
    </div>
  );
}

export default App;
