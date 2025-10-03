import { useState } from "react";
export default function AddTaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onAdd?.(text);
    setText("");
  };
  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
      <label htmlFor="task" className="sr-only">
        New task
      </label>
      <input
        id="task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g., Finish lab write-up"
        aria-label="New task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
