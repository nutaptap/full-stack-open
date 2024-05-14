import Header from "./Header";
import Parts from "./Parts";
import Total from "./Total";

export default function Course({ course, parts }) {
  return (
    <main>
      <Header course={course} />
      <Parts parts={parts} />
      <Total parts={parts} />
    </main>
  );
}
