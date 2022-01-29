import React, { useState } from "react";

let counter = 0;
function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function deleteItem(itemID) {
    setList(list.filter((item) => item.id !== itemID));
  }

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setList((old) => {
            setTask("");
            return [...old, { todo: task, id: counter++ }];
          });
        }}
      >
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </form>
      <button
        onClick={() => {
          setList([...list, task]);
          setTask("");
        }}
      >
        Add
      </button>
      <ul>
        {list.map((item) => (
          <div>
            <li key={item.id}>{item.todo}</li>
            <button
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
