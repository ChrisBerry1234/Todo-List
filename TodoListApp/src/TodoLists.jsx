import { useState } from "react";

function TodoList({ item, index, todo, setTodo }) {
    
  const [toggle, setToggle] = useState(false);
  const [inputList, setInputList] = useState("");

  const DeleteTask = (item) => {
    const newTodos = [...todo];
    newTodos.slice(item, 1);
    setTodo(newTodos);
  }


   const SetDiv = () => {
    setToggle(!toggle);
  }
    return(
        <div className="Todo-Item">
            <span> Task: {item.task}</span>
            <span> Due Date: {item.dueDate} </span>
            <span> Date Added: {item.dateAdded}</span>
            <button onClick={() => SetDiv()}> Add Additonal Tasks </button>
            <button className="Delete-Button" onClick={() => DeleteTask(index)}> Delete </button>
            {toggle && <div className="TodoList-List">
              <input
                type="text"
                required
                autoComplete="off"
                value={inputList}
                onChange={(e) => setInputList(e.target.value)}
              ></input>
              <button>Add More</button>
            </div>}
          </div>

    )
}

export default TodoList;