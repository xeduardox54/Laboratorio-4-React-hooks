import './App.css';
import Statistics from './components/statistics';
import React, {useState} from 'react';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  var showStatistics = <div style={{marginTop:10}}>No feedback given</div>;

  if(good>=1||neutral>=1||bad>=1){
    showStatistics = <Statistics good={good} neutral={neutral} bad={bad}/>;
  }

  return(
    <div>
      <h2>give feedback</h2>
      <br/>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <br/>
      {showStatistics}
    </div>
  );
}

export default App;