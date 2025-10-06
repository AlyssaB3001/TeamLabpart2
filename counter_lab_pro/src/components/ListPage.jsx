
import { useState } from "react";
import AddTaskForm from "./AddTaskForm.jsx";
import TaskList from "./TaskList.jsx";
import FilterBar from "./FilterBar.jsx";

export default function ListPage({ list }) {
  const [tasks, setTasks] = useState(list.tasks);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTask = { id: Date.now(), text: trimmed, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", margin: "16px" }}>
      <h2>{list.name}</h2>
      <AddTaskForm onAdd={addTask} />
      <FilterBar filter={filter} onChangeFilter={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
