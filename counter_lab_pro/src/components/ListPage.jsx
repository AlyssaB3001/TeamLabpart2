import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import { useState } from "react";

export default function ListPage({ list, addTask, toggleTask, deleteTask, goBack }) {
  const [filter, setFilter] = useState("all");

  const tasks = list.tasks.filter(t =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  );

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <button 
          onClick={goBack}
          style={{
            marginRight: "15px",
            padding: "8px 12px",
            background: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          ← Back
        </button>
        <h2 style={{ margin: 0 }}>{list.name}</h2>
      </div>
      <AddTaskForm onAdd={(text) => addTask(list.id, text)} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {tasks.length === 0 ? (
        list.tasks.length === 0 ? <p>This list is empty</p> : <p>No tasks</p>
      ) : (
        <TaskList tasks={tasks} toggleTask={(id) => toggleTask(list.id, id)} deleteTask={(id) => deleteTask(list.id, id)} />
      )}
      <p>{list.tasks.filter(t => t.done).length} of {list.tasks.length} completed</p>
    </div>
  );
}