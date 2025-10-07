import ListCard from "./ListCard";
import AddListForm from "./AddListForm.jsx";

export default function ListDashboard({ lists, addList, deleteList, selectList }) {
  return (
    <div>
      <h2>My Lists</h2>
      <AddListForm onAdd={addList} />
      {lists.map(l => (
        <ListCard key={l.id} list={l} deleteList={deleteList} selectList={selectList} />
      ))}
    </div>
  );
}