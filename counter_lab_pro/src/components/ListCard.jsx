export default function ListCard({ list, deleteList, selectList }) {
  const completed = list.tasks.filter((t) => t.done).length;
  const total = Array.isArray(list.tasks) ? list.tasks.length : 0;

  return (
    <div 
      className="card"
      style={{
        border: "2px solid #4a90e2",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px 0",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#f8f9fa",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        position: "relative"
      }}
      onClick={() => selectList(list.id)}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
        e.currentTarget.style.borderColor = "#2980b9";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        e.currentTarget.style.borderColor = "#4a90e2";
      }}
    >
      <h2 style={{ 
        color: "#2c3e50", 
        marginTop: "0",
        borderBottom: "1px solid #e0e0e0",
        paddingBottom: "8px"
      }}>
        {list.name}
      </h2>
      <p 
        aria-live="polite" 
        className="summary"
        style={{
          fontSize: "1rem",
          color: completed === total && total > 0 ? "#27ae60" : "#7f8c8d"
        }}
      >
        {completed} of {total} completed
      </p>
      <button 
        className="delete-btn" 
        aria-label="Delete list" 
        onClick={(e) => {
          e.stopPropagation();
          deleteList(list.id);
        }}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer"
        }}
      >
        Delete
      </button>
    </div>
  );
}
