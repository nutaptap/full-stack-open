import Part from "./Part";

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;
export default function Parts({ parts }) {
  return (
    <>
      {parts.map((part, index) => (
        <Part part={part} key={index} />
      ))}
    </>
  );
}
