export default function Filter({ handleFilter }) {
  return (
    <section>
      <form>
        <h2>Filter</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "200px",
            gap: "8px",
          }}
        >
          <label htmlFor="filter">Filter shown with: </label>
          <input type="text" id="filter" onChange={handleFilter} />
        </div>
        <div style={{ marginTop: "8px" }}></div>
      </form>
    </section>
  );
}
