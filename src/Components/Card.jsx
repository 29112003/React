import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[250px] h-[300px] rounded-md bg-slate-200 hover:bg-slate-300 duration-500 pt-20 text-center shadow-lg' >
      {props.title}
      <h1>and the childer is :- </h1>
      {props.children}
    </div>
  )
}

export default Card
