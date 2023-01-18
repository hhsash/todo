import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from '../../../create-todo-field/CreateTodoField'
import { Reorder } from 'framer-motion'

const Home = () => {
  // Get todos
  const [todos, setTodos] = useState(localStorage.todos ? [...JSON.parse(localStorage.todos)] : [])

  // Mark todo as completed
  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    localStorage.setItem('todos', JSON.stringify(copy))
    setTodos(copy)
  }
  
  // Remove Todo
  const removeTodo = (id) => {
    const copy = [...todos].filter(t => t.id !== id)
    localStorage.setItem('todos', JSON.stringify(copy))
    setTodos(copy)
  }

  // Reorder todo
  const todoReorder = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
    setTodos(todos)
  }

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-center text-2xl font-medium mb-10'>
        ToDo List
      </h1>
      <CreateTodoField 
        todos={todos} 
        setTodos={setTodos} 
      />
      {
        todos.length === 0 &&
        <p className='py-2 text-center text-slate-400'>
          Haven’t tasks yet...
        </p>
      }
      <Reorder.Group 
        className='overflow-y-scroll h-[400px]' 
        axis='y' 
        values={todos} 
        onReorder={todoReorder} 
      >
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            changeTodo={changeTodo} 
            removeTodo={removeTodo} 
          />
        ))}
      </Reorder.Group>
    </div>
  )
}

export default Home