import { useState } from "react";
import ListCard from "./ListCard"
import AddListForm from "./AddListForm.jsx";

export default function ListDashboard({groups, onAdd, deleteList, selectList}) {
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center"  }}>
      <div>
        <h2>My Lists</h2>
        <AddListForm onAdd={onAdd} />
        {groups.map(group => (
          <ListCard key={group.id} group={group} deleteList={deleteList} selectList={selectList} />
        ))}
      </div>
    </div>
  );
}