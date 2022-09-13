import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  }

  const addItem = (e) => {
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    })
    setInputList("");
  }

  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrE,ind)=>{
        return ind !== id;
      })
    })
  }

  return (
    <div className="App">
      <div className="center">
        <h1 className="main-heading">To Do List</h1>
        <input type="text" placeholder="Add item" value={inputList} onChange={itemEvent} />
        <button className="addButton" onClick={addItem} >+</button>
        <ol>
          {/* <li className="listItem">{inputList}</li> */}
          {items.map((itemval,index) => {
            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItem} />
          })}

        </ol>
      </div>
    </div>
  );
}

export default App;
