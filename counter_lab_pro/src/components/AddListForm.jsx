import { useState } from 'react';

export default function AddListForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-list-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New list name..."
        className="add-list-input"
      />
      <button type="submit" className="add-list-button">Add List</button>
    </form>
  );
}