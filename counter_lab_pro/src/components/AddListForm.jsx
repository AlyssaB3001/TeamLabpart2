import { useState } from "react";

export default function AddListForm({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (value.trim().length < 3) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={submit} className="form-row" aria-label="Add new list">
      <input
        className="input"
        placeholder="New list name (min 3 chars)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn" disabled={value.trim().length < 3} type="submit">
        Create
      </button>
    </form>
  );
}