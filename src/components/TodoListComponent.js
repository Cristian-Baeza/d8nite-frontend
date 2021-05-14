import React from 'react';
import { useState } from "react" ;

function TodoListComponent(props) {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div>
      
        <h2 className="imgicons">Places we would like to go:</h2>
        <br></br>
        {/* <img src="images/wallpaper.png" className="circle-img"/> */}
        {/* <br></br> */}
      <div className="todo">
        
        <input onChange={handleChange} type="text" value={inputText} />
        <br></br>
        <button onClick={addItem}>
          
          <span>Add</span>
          
        </button>
      </div>
        
      <div>
      <br></br>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListComponent;