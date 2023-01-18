import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='py-10 bg-gray-900 h-screen text-white'>
      {children}
    </div>
  )
}

export default Layout