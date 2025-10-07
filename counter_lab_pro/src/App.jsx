import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ListPage from "./components/ListPage.jsx";
import ListDashboard from "./components/ListDashboard.jsx";
import "./App.css";



// NOTE: localStorage persistence removed — lists now use plain useState



export default function App() {
  const [lists, setLists] = useState([
    { id: 1, name: "Group 1", tasks: [{ id: 1, text: "Plan meeting", done: false }, { id: 2, text: "Review project", done: false }] },
    { id: 2, name: "Group 2", tasks: [{ id: 1, text: "Write report", done: true }, { id: 2, text: "Submit assignment", done: false }] }
  ]);

  const [selectedListId, setSelectedListId] = useState(null);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    setTotalTasks(lists.reduce((sum, l) => sum + (Array.isArray(l.tasks) ? l.tasks.length : 0), 0));
  }, [lists]);

  const addList = (name) => {
    const newList = { id: Date.now(), name, tasks: [] };
    setLists(prev => [...prev, newList]);
    setSelectedListId(newList.id);
  };

  const deleteList = (id) => {
    if (window.confirm("Delete this list?")) {
      setLists(prev => prev.filter(l => l.id !== id));
      setSelectedListId(null);
    }
  };

  const addTask = (listId, text) => {
    setLists(prev =>
      prev.map(l =>
        l.id === listId ? { ...l, tasks: [...(l.tasks || []), { id: Date.now(), text, done: false }] } : l
      )
    );
  };

  const toggleTask = (listId, taskId) => {
    setLists(prev =>
      prev.map(l =>
        l.id === listId
          ? { ...l, tasks: l.tasks.map(t => (t.id === taskId ? { ...t, done: !t.done } : t)) }
          : l
      )
    );
  };

  const deleteTask = (listId, taskId) => {
    setLists(prev =>
      prev.map(l => (l.id === listId ? { ...l, tasks: l.tasks.filter(t => t.id !== taskId) } : l))
    );
  };

  return (
    <div className="app-container">
      <Header goHome={() => setSelectedListId(null)} totalTasks={totalTasks} />
      {selectedListId === null ? (
        <ListDashboard lists={lists} addList={addList} deleteList={deleteList} selectList={setSelectedListId} />
      ) : (
        <ListPage
          list={lists.find(l => l.id === selectedListId)}
          addTask={addTask}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          goBack={() => setSelectedListId(null)}
        />
      )}
    </div>
  );
}
