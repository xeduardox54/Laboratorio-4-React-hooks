import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <br/>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <br/>
      <h2>statistics</h2>
      good: {good} <br/>
      neutral: {neutral} <br/>
      bad: {bad} <br/>
      average: {(good+neutral+bad)/3} <br />
      positive: {(good/(good+neutral+bad)*100)}% <br />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)