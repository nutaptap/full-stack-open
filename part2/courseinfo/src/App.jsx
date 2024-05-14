import Course from "./Course";
const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
    {
      name: "Redux",
      exercises: 11,
    },
  ];

  return <Course course={course} parts={parts} />;
};

export default App;
