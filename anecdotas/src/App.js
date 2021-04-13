import React, { useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(anecdotes[Math.floor(Math.random() * anecdotes.length)])
  const [votes, setVotes] = useState(0)

  function changeAnecdote() {
    const anecdote = anecdotes[Math.floor(Math.random() * anecdotes.length)];
    setSelected(anecdote);
    setVotes(anecdote.votes);
  }
  
  var newArray = []
  for(var cont=0;cont<=5;cont++) {
    newArray.push(anecdotes[cont].votes)
  };
  const mostSelected = anecdotes[newArray.indexOf(Math.max(...newArray))]

  return (
    <div style={stylesContainer}> 
      <h1 style={{textAlign:"Center"}}>Anecdotes</h1>
      <div style={{backgroundColor:'yellow',padding:5}}>
        <h2>Anecdote of the day</h2>
        <h4>{selected.anecdote}</h4>
        <h3>Has {votes}</h3>
        <button onClick={()=>{selected.votes++;setVotes(selected.votes)}}>Vote</button>
        <button onClick={changeAnecdote} >Next Anecdote</button>
      </div>
      <div style={{backgroundColor:'orange',padding:5}}>
        <h2>Anecdote with most votes</h2>
        <h4>{mostSelected.anecdote}</h4>
        <h3>Has {mostSelected.votes}</h3>
      </div>
    </div>
  )
}

const anecdotes = [
  {
    anecdote: 'If it hurts, do it more often',
    votes: 0,
  },
  { 
    anecdote: 'Adding manpower to a late software project makes it later!',
    votes: 0,
  },
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0,
  },
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0,
  },
  {
    anecdote: 'Premature optimization is the root of all evil.',
    votes: 0,
  },
  {
    anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0,
  },
]

const stylesContainer = {
  backgroundColor: "green",
  margin: 10,
  padding: 20,
}

export default App;
