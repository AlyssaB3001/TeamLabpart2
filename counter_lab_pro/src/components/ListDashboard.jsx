import { useState } from "react";
import ListCard from "./ListCard"
import AddListForm from "./AddListForm.jsx";

export default function ListDashboard({groups, onAdd, deleteList, selectList}) {
  return (
    <>
    <div style={{justifyContent: "center", textAlign: "center", justifyItems: "center"}}>
        <h2>My Lists</h2>
        <AddListForm onAdd={onAdd} />
        <div className="my-grid">
          {groups.map(group => (
            <ListCard key={group.id} group={group} deleteList={deleteList} selectList={selectList} />
          ))}
        </div>
      </div>
    </>
  );
}