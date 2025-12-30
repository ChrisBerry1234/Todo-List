import { useState } from "react";

function App() {
  
  const curr = new Date();
  //creating state to hold data
  const [date, setDate] = useState("");
  const [todo, setTodo] = useState([{task:"Gym", completed:false, dueDate: date, dateAdded: curr.toLocaleDateString(), lists: []}]);
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [inputList, setInputList] = useState("");
  const [lists, setLists] = useState([]);  

  const AddTask = () => {
    //error handling
    if (inputValue.trim() !== "" && date.trim() !== "")  {
      setTodo([...todo, {task: inputValue, completed:false, dueDate: date, dateAdded: curr.toLocaleDateString(), lists: []}]);
    }

    if (!inputValue)
    {
      alert("Please enter a task");
      return;
    }
    if (!date)
    {
      alert("Please Enter A Due Date");
      return;
    }
    setInputValue("");
    setDate("");
    
  }

  const DeleteTask = (item) => {
    const newTodos = [...todo];
    newTodos[item].lists.push({name: "New List", tasks: []});
    setTodo(newTodos);
  }

  const SetDiv = () => {
    setToggle(!toggle);
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
          <div key={index} className="Todo-Item">
            <span> Task: {item.task}</span>
            <span> Due Date: {item.dueDate} </span>
            <span> Date Added: {item.dateAdded}</span>
            <button onClick={() => SetDiv(index)}> Add Additonal Tasks </button>
            <button className="Delete-Button" onClick={() => DeleteTask()}> Delete </button>
            {toggle && <div className="TodoList-List">
              <input
                type="text"
                required
                autoComplete="off"
                value={inputList}
                onChange={(e) => setInputList(e.target.value)}
              ></input>
            </div>}
          </div>
        );
      })}   
    </div>
  
  </div>
  </>
)};

export default App;