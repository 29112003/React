import './index.css'
import './App.css'

// day 6.1 object-destructuring 

import React from 'react'

const App = () => {

const submitHandler = (e)=>{
  e.preventDefault()
  const {firstname , lastname , email , contact  , password} = e.target

  const fromDetails = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    contact: contact.value,
    password: password.value
  }

  console.log(fromDetails)

}


  return (
    <div>
      <form onSubmit={submitHandler} >
        <input type="text" placeholder="firstname" name="firstname" />
        <input type="text" placeholder="lastname" name="lastname" />
        <input type="email" placeholder="email" name="email" />
        <input type="number" placeholder="contact" name="contact" />
        <input type="password" placeholder="password" name="password" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App




// 1. Counter Application {practice}
// Create a button that increments a number on each click.
// Add another button to reset the counter to 0.

// import React, { useState } from 'react'

// const App = () => {

//   const [number, setnumber] = useState(0)

//   const increment = ()=>{
//     setnumber((prevNumber) => prevNumber+1)
//   }
//   const reset = ()=>{
//     setnumber(0)
//   }
//   return (
//     <div className="text-center" >
//       <button onClick={increment} className="bg-slate-600 px-4 py-1 m-10 rounded inline-block text-white text-center" >increament</button>
//       <h1 className="px-3 py-1 bg-blue-500 rounded inline-block" >{number}</h1>
//       <button onClick={reset} className="bg-red-500 px-4 py-1 m-10 rounded inline-block text-white text-center" >reset</button>
//     </div>
//   )
// }

// export default App


// day 5.2 form handling 


// import React from 'react'

// const App = () => {

//   const runme = (e)=>{
//     e.preventDefault();
//     console.log(e.target.username.value)
//   }

//   return (
//     <div>
//       <form onSubmit={runme} >
//         <input type="text" placeholder='username' name='username'  />
//         <input type="submit" value="done" />
//       </form>
//     </div>
//   )
// }

// export default App




// day 5.1 timer and from handling 
// import './index.css'

// import React, { useState } from 'react'

// const App = () => {

//   const [timer, settimer] = useState(new Date().toLocaleTimeString())

//   setInterval(()=>{
//       settimer(new  Date().toLocaleTimeString())
//   },1000)

//   return (
//     <div>
//       {timer}
//     </div>
//   )
// }

// export default App




// day 4 useState 
// import './index.css'
// import React, { useState } from 'react'
// // const export and {} hai and name likha hai
// const App = () => {

//   const [title, settitle] = useState("i am learning backend...")
//   // let title = "i am learning backend..."

//   const change = ()=>{
//     // title = "now learning React..."
//     settitle("now learning React...")
//     console.log(title)
//   }

//   return (
//     <div>
//       <h1>{title}</h1>
//       <button onClick={()=>change()} className='px-5 py-2 bg-slate-600 m-5' >change course</button>
//     </div>
//   )
// }

// export default App


// day 3 function in react 

// import './App.css'
// import React from 'react'

//   let info = () =>{
//     console.log("hello virendra")
//   }
//   let advanced = (data) =>{
//     console.log(data)
//   }

// const App = () => {
//   return (
//     <div>
//       <button onClick={info} className='bg-red-600 rounded py-2 px-5' >hello to virendra</button>
//       <button onClick={()=>advanced("kaise ho adars")} className='bg-red-600 rounded py-2 px-5' >hello to adarsh</button>
//     </div>
//   )
// }

// export default App




// day 1 and 2 json in view {browser} and Component
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
