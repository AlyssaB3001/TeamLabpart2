import { useState } from "react";

export default function ListDashboard({ onAdd, groups = [] }) {
  const [name, setName] = useState("");

  const trimmed = name.trim();
  const isValid = trimmed.length >= 3;

  const submit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onAdd?.(trimmed);
    setName("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={submit}
        style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}
      >
        <input
          id="todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., ACM"
          aria-label="New To-Do Group"
          aria-invalid={!isValid && trimmed.length > 0}
        />
        <button type="submit" disabled={!isValid} title="Enter at least 3 characters">
          
        </button>
      </form>

      <div>
        {groups.length === 0 ? (
          <p style={{ color: "#666" }}>No groups yet. Add one above!</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {groups.map((g) => (
              <li key={g.id} style={{ marginBottom: 4 }}>
                {g.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
