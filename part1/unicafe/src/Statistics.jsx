export function Statistics({ statistics }) {
  const { good, neutral, bad, all, average, positive } = statistics;
  if (good || neutral || bad) {
    return (
      <article>
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
            average <span>{average || 0}</span>
          </li>
          <li>
            positive <span>{positive + "%" || 0}</span>
          </li>
        </ul>
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
