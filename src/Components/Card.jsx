import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[250px] h-[300px] rounded-3xl bg-slate-200 hover:bg-slate-300 duration-500 pt-20 text-center shadow-lg' >
      <h1 className='font-semibold text-blue-950 text-xl mb-4' > name : {props.name} </h1>
      <h1 className='font-semibold text-blue-950 text-xl mb-2' > address : {props.address}</h1>
      <h1 className='font-semibold text-blue-950 text-xl' > age : {props.age}</h1>
    </div>
  )
}

export default Card
