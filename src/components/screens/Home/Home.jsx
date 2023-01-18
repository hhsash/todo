import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from '../../create-todo-field/CreateTodoField'

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
      <div
        className='overflow-y-scroll h-[400px]' 
      >
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            changeTodo={changeTodo} 
            removeTodo={removeTodo} 
          />
        ))}
      </div>
    </div>
  )
}

export default Home