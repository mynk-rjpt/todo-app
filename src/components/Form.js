import React from "react";
import TextCount from "./TextCount";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText.length >= 5){
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random()*1000}
      ]);
      setInputText("");
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return( 
  <form>
    <input 
      value={inputText}
      onChange={inputTextHandler} 
      type="text" 
      className="todo-input" 
      placeholder="Add a new task"
    />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>

    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">Show All</option>
        <option value="uncompleted">Remove Completed</option>
        <option value="completed">Show Completed</option>
      </select>
    </div>
  </form>
  );
};

export default Form;