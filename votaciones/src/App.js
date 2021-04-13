import './App.css';
import Statistics from './components/statistics';
import Buttons from './components/buttons';
import React, {useState} from 'react';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  var showStatistics = <div style={{marginTop:10, backgroundColor:"red"}}>No feedback given</div>;

  if(good>=1||neutral>=1||bad>=1){
    showStatistics = <Statistics good={good} neutral={neutral} bad={bad}/>;
  }

  return(
    <div>
      <div style={{textAlign:"center"}}>
        <h1>Votaciones</h1>
      </div>
      <div style={container}>
          <h2>give feedback</h2>
          <div style={{MarginBottom: 60}}>
            <Buttons value={good} setValue={setGood} name={"Good"}/>
            <Buttons value={neutral} setValue={setNeutral} name={"Neutral"}/>
            <Buttons value={bad} setValue={setBad} name={"Bad"}/>
          <div/>
        </div>
        {showStatistics}
      </div>
    </div>
  );
}

const container = {
  color: "white",
  backgroundColor: "skyblue",
  marginLeft: 100,
  marginRight: 100,
  padding: 20,
}

export default App;