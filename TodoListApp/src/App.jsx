import { useState } from "react";

function App() {
  
  const curr = new Date();
  //creating state to hold data
  const [todo, setTodo] = useState([{task:"Gym", completed:false, dataAdded: curr.toLocaleDateString()}]);




return (
  <>
  <div className="Main-Container">
    <h1>Todo List</h1>
    <div className="Input-Container">
      <input 
       type="text" 
       placeholder="Enter Task" 
       required 
       autoComplete="off">
      </input>
      <button onClick={AddTask}>Add Task</button>
    </div>


  </div>
  </>
)
};

export default App;