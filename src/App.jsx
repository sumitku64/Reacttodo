import AppName from "./components/AppName";
import InputItems from "./components/InputItems";
import Todoitem from "./components/Todoitem";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import "./css/App.css";
function App() {
  
  const [todos, setTodos] = useState([]);

  const handleaddTodo = (task, date) => {
    const newTodo = { tasks: task, date: date };
    setTodos([...todos, newTodo]);
    }
    const handledeleteTodo = (taskName) =>{
      console.log(taskName);
      const newTodo=todos.filter((item)=>item.tasks!==taskName);
      setTodos(newTodo);
    }
  return (
    <center className="todo-container">
      <AppName />
      <InputItems addtodo={handleaddTodo}/>
      {todos.length ===0 && <WelcomeMessage />}
      <Todoitem todo={todos} deletetodo={handledeleteTodo}/> 
      
    </center>
  )
}
export default App;
