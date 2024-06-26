import { useState } from "react";
import { Statistics } from "./Statistics";
import { Button } from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: good + neutral + bad,
    average: ((good - bad) / (good + neutral + bad)).toFixed(2),
    positive: ((good / (good + neutral + bad)) * 100).toFixed(0),
  };

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
        <Button handleClick={handleClick} type={"good"} />
        <Button handleClick={handleClick} type={"neutral"} />
        <Button handleClick={handleClick} type={"bad"} />
      </div>
      <Statistics statistics={statistics} />
    </main>
  );
};

export default App;
