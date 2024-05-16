import Header from "./Header";
import Parts from "./Parts";
import Total from "./Total";

export default function Course({ course }) {
  return (
    <main>
      <Header course={course.name} />
      <Parts parts={course.parts} />
      <Total parts={course.parts} />
    </main>
  );
}
