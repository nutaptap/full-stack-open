import { StatisticLine } from "./StatisticLine";

export function Statistics({ statistics }) {
  const { good, neutral, bad, all, average, positive } = statistics;
  if (good || neutral || bad) {
    return (
      <article>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={all} />
            <StatisticLine text={"average"} value={average || 0} />
            <StatisticLine text={"positive"} value={positive + "%" || 0} />
          </tbody>
        </table>
      </article>
    );
  } else {
    return (
      <article>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </article>
    );
  }
}
