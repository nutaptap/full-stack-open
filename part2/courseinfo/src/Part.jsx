export default function Part({ part }) {
  console.log(part);
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
