import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <>
      <AddTaskForm onAdd={handleAdd} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        filter={filter}
      />
    </>
  );
}

export default App;
