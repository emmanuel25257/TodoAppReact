import React,{useState, useEffect} from "react";
import Header from "./components/Header";
import "./App.css"
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

const [Input , setInput] = useState("");
const [todos , setTodo] = useState([]);
const [editTodo, setEditTodo] = useState(null);


useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

return(
<div className="container">
  <div className="app-wrapper">
    <div>
      <Header></Header>
    </div>
    <div>
      <Form 
      input = {Input}
      setInput = {setInput}
      todos = {todos}
      setTodo = {setTodo}
      editTodo = {editTodo}
      setEditTodo = {setEditTodo}
      ></Form>
    </div>
    <div>
      <TodoList todos={todos} setTodos = {setTodo} setEditTodo = {setEditTodo} ></TodoList>
    </div>
  </div>
</div>
)

}


export default App;
