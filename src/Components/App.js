import React, { useState } from "react";
import "./index.css";

export default function App() {

  const [input, setInput] = useState("");

  const [task, setTask] = useState([
    {id: 0, name: "Estudar"},
    {id: 1, name: "Treino Diário"}
  ]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  //Adicionando uma task nova
  const AddNewTask = () => {
    let newTask = {id: Math.floor(Math.random() * 50), name: input};

    task.push(newTask);

    setInput("");

    console.log(task);
  };

  //Removendo uma task
  const removeTask = (id) => {
    
    const newList = task.filter( tag => tag.id !== id);

    setTask(newList)

    console.log(newList)
  };

  return (
    <div className="main">
      <h1 className="Tittle">todo</h1>
      <div className="search-box">
        <input
          className="search"
          onChange={handleInput}
          type="text"
          placeholder="Adicionar ..."
          value={input}
        />
        <button className="search-button" onClick={AddNewTask}>Adicionar</button>
      </div>
      {task.map( tag => {
        return(
          <div className="card" key={tag.id}>
            <h2 className="card-name">{tag.name}</h2>
            <button className="card-button" onClick={() => removeTask(tag.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
