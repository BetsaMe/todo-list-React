import React, { useState } from "react";

//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [note, setNote] = useState("");
  const [array, setArray] = useState([]);

  function manageChange(e) {
    setNote(e.target.value);
  }
  function manageClick() {
    setArray((prevItems) => {
      return [...prevItems, note];
    });
    setNote("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={manageChange} type="text" value={note} />
        <button onClick={manageClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
