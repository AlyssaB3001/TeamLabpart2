
export default function FilterBar({ filter, onChangeFilter }) {
  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
      <button
        onClick={() => onChangeFilter("all")}
        style={{
          fontWeight: filter === "all" ? "bold" : "normal",
          backgroundColor: filter === "all" ? "#1976d2" : "#e0e0e0",
          color: filter === "all" ? "#fff" : "#000"
        }}
      >
        All
      </button>
      <button
        onClick={() => onChangeFilter("active")}
        style={{
          fontWeight: filter === "active" ? "bold" : "normal",
          backgroundColor: filter === "active" ? "#4caf50" : "#e0e0e0",
          color: filter === "active" ? "#fff" : "#000"
        }}
      >
        Active
      </button>
      <button
        onClick={() => onChangeFilter("completed")}
        style={{
          fontWeight: filter === "completed" ? "bold" : "normal",
          backgroundColor: filter === "completed" ? "#9c27b0" : "#e0e0e0",
          color: filter === "completed" ? "#fff" : "#000"
        }}
      >
        Completed
      </button>
    </div>
  );
}


