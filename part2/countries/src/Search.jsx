export default function Search({ handleQuery, handleSearch }) {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label htmlFor="query">Find countries</label>
      <input
        onChange={handleQuery}
        type="text"
        name="query"
        id="query"
        style={{ maxWidth: "300px" }}
      ></input>
      <button onClick={handleSearch} style={{ maxWidth: "fit-content" }}>
        Search
      </button>
    </form>
  );
}
