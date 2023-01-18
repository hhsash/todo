import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'

const CreateTodoField = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('')

  // Add todo
  const addTodo = (title) => {
    if(title !== '') {
      // Create array with new todo
      const copy = [{
        id: Date.now(),
        title,
        isCompleted: false
      }, ...todos]
      localStorage.setItem('todos', JSON.stringify(copy))
      setTodos(copy)
      setTitle('')
    } else {
      alert('Title is empty')
    }
  }
  
  return (
    <div className='mb-8 w-4/5 mx-auto relative'>
      <input 
        autoFocus
        maxLength='50'
        className='bg-transparent border-2 border-slate-500 rounded-xl w-full py-2 px-4 pr-10 focus:border-slate-200 transition-colors duration-300'
        type="text" 
        placeholder='Enter your task...'
        onChange={e => setTitle(e.target.value)} 
        value={title} 
        onKeyPress={e => e.key === 'Enter' && addTodo(title)} 
      />
      <button
        title='Add task' 
        type="submit"
        onClick={() => addTodo(title)}
        className='absolute top-0 right-0 py-3 px-4' 
      >
        <MdAdd size={20} />
      </button>
    </div>
  )
}

export default CreateTodoField