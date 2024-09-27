import "./index.css";
import "./App.css";

// //  Change Background Color
//  Create a button that changes the background color of a div when clicked.
//  Use useState to store different colors and cycle through them.
import React, { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0);

  // Define colors in a more flexible way
  const colors = [
    "bg-rose-500",
    "bg-slate-400",
    "bg-zinc-500",
    "bg-orange-200",
    "bg-lime-300",
    "bg-green-200",
    "bg-cyan-300"
  ];

  // Function to change the index
  const changeColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center gap-3">
      <div
        className={`h-[230px] w-[230px] bg-red-200 rounded transition-all duration-500 ${colors[index]}`}
        role="img"
        aria-label={`Background color is ${colors[index]}`}
      ></div>
      <button
        onClick={changeColor}
        className="rounded py-1 px-3 bg-rose-500 hover:bg-rose-600 duration-500 text-white"
        aria-label="Change background color"
      >
        Change Color
      </button>
    </div>
  );
};

export default App;



// // day 6.2 two-way binding
// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [username, setusername] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };


//   console.log(username)

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input 
//         type="text" 
//         placeholder="username" 
//         name="username" 
//         onChange={(e)=>setusername(e.target.value)}
//         value={username}
//         />
//         <button >submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// day 6.1 object-destructuring

// import React from 'react'

// const App = () => {

// const submitHandler = (e)=>{
//   e.preventDefault()
//   const {firstname , lastname , email , contact  , password} = e.target

//   const fromDetails = {
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     contact: contact.value,
//     password: password.value
//   }

//   console.log(fromDetails)

// }

//   return (
//     <div>
//       <form onSubmit={submitHandler} >
//         <input type="text" placeholder="firstname" name="firstname" />
//         <input type="text" placeholder="lastname" name="lastname" />
//         <input type="email" placeholder="email" name="email" />
//         <input type="number" placeholder="contact" name="contact" />
//         <input type="password" placeholder="password" name="password" />
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

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
