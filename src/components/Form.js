import React, {useEffect}from 'react'
import { v4  } from 'uuid'

const Form = ({input, setInput, todos, setTodo, setEditTodo, editTodo}) => {
  const updateTodo = (title, id, completed) => {

    const newTodo = todos.map((todo) => 
      todo.id === id ? {id , title, completed} : todo
    );
    setTodo(newTodo);
    setEditTodo = ""
  }

    useEffect(() => {
      if (editTodo) {
        setInput(editTodo.title)
      }
      else(
        setInput('')
      )
    }, [setInput, editTodo])

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
        setTodo([...todos, {id: v4(), title: input, completed: true}]);
        setInput("");
        }
        else{
          updateTodo(input, editTodo.id, editTodo.completed)
        }
       
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter a Todo..." className='task-input' required value={input} onChange={onInputChange}></input>
        <button className='button-add' type='submit'>{editTodo ? "OK" : "Add"}</button>
    </form>
  )
}

export default Form
