import './App.css'
import React from 'react'

  let info = () =>{
    console.log("hello virendra")
  }
  let advanced = (data) =>{
    console.log(data)
  }

const App = () => {
  return (
    <div>
      <button onClick={info} className='bg-red-600 rounded py-2 px-5' >hello to virendra</button>
      <button onClick={()=>advanced("kaise ho adars")} className='bg-red-600 rounded py-2 px-5' >hello to adarsh</button>
    </div>
  )
}

export default App




// day 1 and 2 
// import './App.css'
// import About from './Components/About'
// import Nav from './Components/Nav'
// import Home from './Components/Home'

// function App() {

//   let details = [
//     {
//       name: "liger",
//       native:"africa",
//       status: "in-progress",
//     },
//     {
//       name: "tiger",
//       native:"indonesia",
//       status: "active"
//     },
//     {
//       name: "lion",
//       native:"India",
//       status: "active"
//     }
//   ]
//   let x = details.map((item,index)=>{
//         return (
//           <div key = {index}>
//             <h1>name : {item.name}</h1>
//             <h1>native : {item.native}</h1>
//             <h1>status : {item.status}</h1>
//           </div>
//         )
//   })

//   return (
//     <>
//       <h1>{x}</h1>
//       <h1 >this is react vite boilerplate {import.meta.env.VITE_API}</h1> 
//       <About/>
//       <Home/>
//       <Nav/>
//     </>
//   )
// }

// export default App
