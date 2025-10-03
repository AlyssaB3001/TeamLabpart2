import './App.css'
import Header from './components/Header.jsx'
import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
      <AddTaskForm onAdd={handleAdd} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        filter={filter}
      />
    </>
  )
}

export default App;
