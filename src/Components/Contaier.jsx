import React from 'react'

const Contaier = ({children}) => {
  return (
    <div  className='bg-red-300 rounded m-auto mt-10 w-[80%] p-3'>
      {children}
    </div>
  )
}

export default Contaier
