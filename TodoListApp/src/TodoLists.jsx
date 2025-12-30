import { useState } from "react";

function TodoList({ item, index, todo, setTodo }) {
    
  const [toggle, setToggle] = useState(false);
  const [inputList, setInputList] = useState("");
  const [showLists, setshowLists] = useState(false);

  const DeleteTask = (item) => {
    const newTodos = [...todo];
    newTodos.splice(item, 1);
    setTodo(newTodos);
  }

  const viewLists = () => {
    setshowLists(!showLists);
  }

  const SetDiv = () => {
    setToggle(!toggle);
  }

const AddList = () => {
    //NEW ARRAY TO STORE CHANGES-MAP ALLOWS US TO MAKE IMMUTABLE CHANGES
    const newTodos = todo.map((todoitem, i) => {
        //While Looping through Each Element, we need to also have some conditions
        if(i === index) //INDEX IS PASSED AS PROP 
        {
            //ELEMENT FOUND NOW ADD MUTATION
            return {
                //SHALLOW COPY OF SPECIFIC TODOITEM
                //LIST IS ANOTHER DATA STRUCTURE WE DO NOT WANT TO DIRECTLY MUTATE SO WE COPY
                ...todoitem, lists: [...todoitem.lists, inputList ]
            }
        }
        //ELSE JUST RETURN ITEM UNTOUCHED
        return todoitem;
    })
    setTodo(newTodos);
    setInputList('');
};


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
              <button onClick={AddList}>Add More</button>
            <button onClick={viewLists}>View Lists</button>
              </div>
            }
              {showLists && item.lists.length > 0 && <div> {item.lists.map((listitem, index) => {
                return (
                    <div key={index}>
                        {listitem}
                    </div>
                );
              })}</div>}
          </div>
    );
}

export default TodoList;