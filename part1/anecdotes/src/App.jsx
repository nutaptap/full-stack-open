import { useState } from "react";
import "./app.css";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const emptyArray = Array(8).fill(0);

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(emptyArray);

  function handleAnecdoteClick() {
    const random = Math.floor(Math.random() * 8);
    setSelected(random);
  }

  function handleVoteClick() {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
    console.log(points);
  }

  function getMaxPoints() {
    const maxValue = Math.max(...points);
    const maxIndex = points.indexOf(maxValue);
    return maxIndex;
  }

  return (
    <main>
      <section>
        <h2>Anecdote of the day</h2>
        <div className="button-container">
          <button onClick={handleVoteClick}>vote</button>
          <button onClick={handleAnecdoteClick}>next anecdote</button>
        </div>
        <div>{anecdotes[selected]}</div>
      </section>
      <section>
        <h2>Anecdote with most votes</h2>
        <div>{anecdotes[getMaxPoints()] || "No voted anecdotes yet"}</div>
      </section>
    </main>
  );
};

export default App;
