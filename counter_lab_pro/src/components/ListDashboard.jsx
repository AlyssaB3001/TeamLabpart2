import { useState } from "react";
import ListCard from "./ListCard"

export default function ListDashboard({ onAdd }) {
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
    <form onSubmit={submit} style={{ display: "flex", gap: 8, justifyContent: "center"  }}>
      {/* <h1> {count.count(count)} </h1> */}
      
      <input
        id="todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g., ACM"
        aria-label="New To-Do Group"
        aria-invalid={!isValid && trimmed.length > 0}
      />
      <button type="submit" title="Enter at least 3 characters">
        ADD NEW GROUP
      </button>
    </form>
  );
}