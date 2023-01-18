import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'
import classNames from 'classnames'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div 
      value={todo} 
      className='flex items-center justify-between mx-auto py-3 px-4 bg-gray-800 mb-3 rounded-md'
    >
      <div 
        title='Mark as completed'
        className='flex items-center cursor-pointer' 
        onClick={() => changeTodo(todo.id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <p 
          className={ classNames('break-all transition-all ease-in-out delay-100 px-3', {
          'line-through text-slate-400': todo.isCompleted
          }) }
        >
          {todo.title}
        </p>
      </div>
      <button 
        title='Delete task'
        onClick={() => removeTodo(todo.id)}
        className='px-2'
      >
        <BsTrash className='transition-colors ease-in-out delay-75 hover:text-red-600' />
      </button>
    </div>
  )
}

export default TodoItem