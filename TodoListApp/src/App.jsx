import { useState } from "react";

function App() {
  
  const curr = new Date();
  //creating state to hold data
  const [todo, setTodo] = useState([{task:"Gym", completed:false, dateAdded: curr.toLocaleDateString()}]);
  const [inputValue, setInputValue] = useState("");

  const AddTask = () => {
    //error handling
    if (inputValue.trim() !== "")  {
      setTodo([...todo, {task: inputValue, completed:false, dateAdded: curr.toLocaleDateString()}]);
    }
    setInputValue("");
  }

  const DeleteTask = (item) => {
    const newTodos = [...todo];
    newTodos.splice(item, 1);
    setTodo(newTodos);
  }

return (
  <>
  <div className="Main-Container">
    <h1>Todo List</h1>
    <div className="Input-Container">
      <input 
       type="text" 
       placeholder="Enter Task" 
       required
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
       autoComplete="off">
      </input>
      <button onClick={AddTask}>Add Task</button>
    </div>

    <div className="Todo-List-Container">
      {todo.map((item, index) => {
        return (
          <div key={index} className="Todo-Item">
            <span> Task: {item.task}</span>
            <span> Date Added: {item.dateAdded}</span>
            <button className="Delete-Button" onClick={() => DeleteTask(index)}> Delete </button>
          </div>
        );
      })}   
    </div>
  </div>
  </>
)};

export default App;