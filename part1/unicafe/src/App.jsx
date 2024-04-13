import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive = ((good / all) * 100).toFixed(2);

  const handleClick = (e) => {
    switch (e.target.textContent) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <h2>Give feedback</h2>
      <div>
        <button onClick={handleClick}>good</button>
        <button onClick={handleClick}>neutral</button>
        <button onClick={handleClick}>bad</button>
      </div>
      <h2>Statistics</h2>
      <ul>
        <li>
          good <span>{good}</span>
        </li>
        <li>
          neutral <span>{neutral}</span>
        </li>
        <li>
          bad <span>{bad}</span>
        </li>
        <li>
          all <span>{all}</span>
        </li>
        <li>
          average <span>{average | 0}</span>
        </li>
        <li>
          positive <span>{positive | 0}</span>
        </li>
      </ul>
    </main>
  );
};

export default App;
