import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

  return (
    <>
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
        todos={todos}
        />
    </>
  )
}

export default TodoList


