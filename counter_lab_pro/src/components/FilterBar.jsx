
export default function FilterBar({ filter, onChangeFilter }) {
  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
      <button
        onClick={() => onChangeFilter("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={() => onChangeFilter("active")}
        style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
      >
        Active
      </button>
      <button
        onClick={() => onChangeFilter("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
      >
        Completed
      </button>
    </div>
  );
}


