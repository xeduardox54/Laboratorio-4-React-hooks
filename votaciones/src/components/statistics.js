import React from 'react';
import Statistic from './statistic';

const Statistics = (props) => { 

  return (
    <div style={{backgroundColor:"green", padding:5}}>
      <h2>statistics</h2>
        <Statistic text="Good" value={props.good}/>
        <Statistic text="Neutral" value={props.neutral}/>
        <Statistic text="Bad" value={props.bad}/>
        average: {(props.good+props.neutral+props.bad)/3}
        positive: {(props.good/(props.good+props.neutral+props.bad)*100)}%
    </div>
  )
}

export default Statistics;