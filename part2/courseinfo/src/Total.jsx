export default function Total({ parts }) {
  const sum = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);
  return (
    <p>
      <b>Number of exercises {sum} </b>
    </p>
  );
}
