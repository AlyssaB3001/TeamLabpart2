import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm.jsx";
import FilterBar from "./FilterBar.jsx";
import TaskList from "./TaskList.jsx";

const STORAGE_KEY = "campusTasks:v1";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw != null) {
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn("Failed to read localStorage, using initialValue:", err);
    }
    // If initialValue is a function, call it (lazy init)
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn("Failed to write localStorage:", err);
    }
  }, [key, value]);

  return [value, setValue];
}
/* ---------------------------------------------- */

function nextId(tasks) {
  return tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
}

export default function ListCard({ group }) {
  // create a per-group storage key so each list has isolated tasks
  const storageKey = group && group.id ? `${STORAGE_KEY}:${group.id}` : STORAGE_KEY;

  // initialize with an empty array for new groups (no shared seed tasks)
  const [tasks, setTasks] = useLocalStorage(storageKey, () => []);
    
  const [filter, setFilter] = useState("all"); // 'all' | 'active' | 'completed'
    
      const handleAdd = (text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        setTasks(prev => [...prev, { id: nextId(prev), text: trimmed, done: false }]);
      };
    
      const handleToggle = (id) => {
        setTasks(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
      };
    
      const handleDelete = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
      };
    
      const total = tasks.length;
      const completed = tasks.filter(t => t.done).length;

    return (
    <div className="Card" style={{border: "1px solid black", borderRadius: 8, padding: 16, margin: 16}}>
      <h1>{group?.name || "New Group"}</h1>
  <AddTaskForm onAdd={handleAdd} />
  <FilterBar filter={filter} onChangeFilter={setFilter} />
      <p aria-live="polite" className="summary">
        {completed} of {total} completed
      </p>
      <TaskList
        tasks={tasks}
        filter={filter}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
    )
}