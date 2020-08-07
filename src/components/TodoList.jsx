import React, { useState, useEffect } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos")
      const jsonData = await response.json()
      console.log(jsonData)
      setTodos(jsonData)

    } catch (err) {
      console.error(err.message)
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
      console.log(deleteTodo)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="tasks">
      <h1>To-Do List</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><button onClick={() => deleteTodo(todo.todo_id) } className="btn btn-danger">Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  )
}

export default TodoList
