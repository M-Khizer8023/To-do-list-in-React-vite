import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  function handleX(id) {
    setArray((items) => items.filter((item) => item.id != id));
  }
  return (
    <div className="container">
      <Todolist
        input={input}
        setInput={setInput}
        array={array}
        setArray={setArray}
        handleX={handleX}
      />
      <Text />
    </div>
  );
}

function Todolist({ input, setInput, array, setArray, handleX }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    const value = { text: input, id: Date.now() };
    setArray((item) => [value, ...item]);
    setInput("");
  }
  console.log(array.length);
  return (
    <div className="todolist">
      <h2 className="title">To-Do List </h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your task"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button">Add</button>
      </form>
      <div className="item_container">
        {array.map((item, index) => (
          <Item
            uniqueObj={item}
            key={item.id}
            handleX={handleX}
            array={array}
            index={index + 1}
          />
        ))}
      </div>
      <div className="float">
        {array.length == 0 ? (
          ""
        ) : (
          <button onClick={() => setArray([])} className="button">
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
function Item({ uniqueObj, handleX, index }) {
  const [check, setCheck] = useState(false);

  return (
    <div className="item">
      <div className="sub_item">
        <span>{index <= 9 ? `0${index}` : index}</span>
        <input
          type="checkbox"
          id="checkbox"
          value={check}
          onChange={() => setCheck(!check)}
        />
        <p id="task" className={check ? "line" : ""}>
          {uniqueObj.text}
        </p>
      </div>
      <div className="button" id="btn" onClick={() => handleX(uniqueObj.id)}>
        X
      </div>
    </div>
  );
}

function Text() {
  return (
    <h1 className="text">
      <span>To Do List </span> with React JSX
    </h1>
  );
}

export default App;
