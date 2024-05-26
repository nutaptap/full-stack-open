export default function Form({ handleName, handleNumber, handleClick }) {
  return (
    <section>
      <form>
        <h2>Add a new number</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "200px",
            gap: "8px",
          }}
        >
          <label htmlFor="name">name: </label>
          <input type="text" id="name" onChange={handleName} />
          <label htmlFor="number">number: </label>
          <input type="text" id="number" onChange={handleNumber} />
        </div>
        <div style={{ marginTop: "8px" }}>
          <button type="submit" onClick={handleClick}>
            add
          </button>
        </div>
      </form>
    </section>
  );
}
