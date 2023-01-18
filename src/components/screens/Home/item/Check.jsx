import React from 'react'
import { BsCheck } from 'react-icons/bs'
import classNames from 'classnames'

const Check = ({ isCompleted }) => {
  return (
    <div 
      className={ classNames('min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] flex items-center border-2 rounded-md border-pink-600', {
        'bg-pink-600': isCompleted
      }) }
    >
      {isCompleted &&
        <BsCheck size={24} />
      }
    </div>
  )
}

export default Check