import { useState } from "react";
import TodoList from "./TodoLists.jsx";

function App() {
  
  const curr = new Date();
  //creating state to hold data
  const [date, setDate] = useState("");
  const [todo, setTodo] = useState([{task:"Gym", completed:false, dueDate: date, dateAdded: curr.toLocaleDateString(), lists: []}]);
  const [inputValue, setInputValue] = useState("");


  const AddTask = () => {
    //error handling
    if (!inputValue.trim())
    {
      alert("Please enter a task");
      return;
    }
    if (!date.trim())
    {
      alert("Please Enter A Due Date");
      return;
    }
    setTodo([...todo, 
      {task: inputValue, 
       completed:false, 
       dueDate: date, 
       dateAdded: curr.toLocaleDateString(), 
       lists: []
      }]);

    setInputValue("");
    setDate("");
  }

return (
  <>
  <div className="Main-Container">
    <h1>Todo List</h1>
    <div className="Input-Container">
      Task <input 
       type="text" 
       placeholder="Enter Task" 
       required
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
       autoComplete="off">
      </input>
      Due Date <input
       type="date"
       value={date}
       onChange={(e) => setDate(e.target.value)}> 
       </input>
      <button onClick={AddTask}>Add Task</button>
    </div>

    <div className="Todo-List-Container">
      {todo.map((item, index) => {
        return (
          //passing state as props
          <TodoList key={index} index={index} item={item} todo={todo} setTodo={setTodo} />
        );
      })}   
    </div>
  </div>
  </>
)};

export default App;