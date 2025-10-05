// src/App.jsx
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ListCard from "./components/ListCard.jsx"
import AddTaskForm from "./components/AddTaskForm.jsx";
import ListDashboard from "./components/ListDashboard.jsx";

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

  // const handleUpdate = (id, action) => {
  //   setgroups(
  //     groups.map(counter => {
  //       if (counter.id === id) {
  //         switch (action) {
  //           case "inc": return { ...counter, count: counter.count + 1 };
  //           case "dec": return { ...counter, count: counter.count - 1 };
  //           case "reset": return { ...counter, count: 0 };
  //           default: return counter;
  //         }
  //       }
  //       return counter;
  //     })
  //   );
  // };

  // const handleDelete = (id) => {
  //   setgroups(counters.filter(counter => counter.id !== id));
  // };

export default function App() {
const STORAGE_KEY = "all-groups"; 
const [groups, setGroups] = useLocalStorage(STORAGE_KEY, []);

const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(groups.reduce((sum, t) => sum +(Number(t.count)|| 0), 0));
}, [groups]);

  const handleAdd = (name) => {
  const newGroups = {
    id: Date.now(), 
    name,
    count: 0,
  };
  setgroups(prev => [...prev, newGroups

  ]);
};


  return (
    <div className="app-container">
      <Header />
      <ListDashboard />
      {/* <AddTaskForm onAdd={handleAdd} /> */}
      <ListCard />
    </div>
  );
}
