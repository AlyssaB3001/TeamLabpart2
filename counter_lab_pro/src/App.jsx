// src/App.jsx
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ListCard from "./components/ListCard.jsx";
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

export default function App() {
  const STORAGE_KEY = "all-groups"; 
  const [groups, setGroups] = useLocalStorage(STORAGE_KEY, []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(groups.reduce((sum, t) => sum + (Number(t.count) || 0), 0));
  }, [groups]);

  const handleAdd = (name) => {
  const newGroup = {
    id: Date.now(), 
    name,
    count: 0,
  };
  setGroups(prev => [...prev, newGroup]);
};


  return (
    <div className="app-container">
      <Header />
      <ListDashboard onAdd={handleAdd} groups={groups} />
      <ListCard />
    </div>
  );
}
