import Part from "./Part";

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

export default function Parts({ parts }) {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
}
