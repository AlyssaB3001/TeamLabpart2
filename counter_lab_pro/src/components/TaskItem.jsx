export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li style={{ display: "flex", gap: 8, alignItems: "center", margin: "6px 0" }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask?.(task.id)}
        aria-label={`Mark ${task.text} ${task.done ? "incomplete" : "complete"}`}
      />
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask?.(task.id)} aria-label={`Delete ${task.text}`}>🗑</button>
    </li>
  );
}
