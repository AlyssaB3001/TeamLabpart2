import { useState } from "react";
import ListCard from "./ListCard"
import AddListForm from "./AddListForm.jsx";

export default function ListDashboard({lists, addList, deleteList, selectList}) {


  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, justifyContent: "center"  }}>
      {/* <h1> {count.count(count)} </h1> */}
      
      <div>
      <h2>My Lists</h2>
      <AddListForm addList={addList} />
      {lists.map(l => (
        <ListCard key={l.id} list={l} deleteList={deleteList} selectList={selectList} />
      ))}
    </div>
    </form>
  );
}