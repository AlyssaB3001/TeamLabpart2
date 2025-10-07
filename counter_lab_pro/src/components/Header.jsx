export default function Header({ goHome, totalTasks }) {
  return (
    <div className="header-container" style={{justifyContent: "center", textAlign: "center", position: "relative"}}> 
      <header>
        <h1 onClick={goHome} style={{cursor: "pointer", color: "#4a90e2" }}>New and Improved Task List</h1>
        {totalTasks > 0 && <div className="task-count">Total Tasks: {totalTasks}</div>}
      </header>
    </div>
  );
}