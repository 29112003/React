// 8 oct 

// folder structured
// main.jsx
// app.jsx > app.jsx ka children hai Child.jsx
// --component ke andar Child.jsx
// create folder in src contexts folder and create context inside it 
// --contexts
// ------TodoContext.jsx


// main.jsx-----------------------

// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css';
// import TodoContext from './contexts/TodoContext.jsx';

// createRoot(document.getElementById('root')).render(
//         <TodoContext>
//             <App  />
//         </TodoContext>
// )

// ------

// import React, { createContext } from 'react'

// export const dataContext = createContext(null)

// const TodoContext = (props) => {

//   return (
//     <dataContext.Provider value={"very improtant baat"} >
//         {props.children}
//     </dataContext.Provider>
//   )
// }

// export default TodoContext

// ----------

// import React, {  } from 'react'
// import Cild from "./components/Child"


// const App = () => {
//   return (
//     <div>
//       <Cild/>
//     </div>
//   )
// }

// export default App

// ----------------


// import React, { useContext } from 'react'
// import { dataContext } from '../contexts/TodoContext'

// const Child = () => {
//   const data = useContext(dataContext)
//   return (
//     <div>
//       {data}
//       <br />
//       <br />
//       app ka child
//     </div>
//   )
// }

// export default Child

// -------------





// --------------------------------------------------------------------------------------------------------------
// data 7 oct
// understanding context alternative of props and discuss about it's disadvantage props chaining unidirectional

// import React, { createContext, useState } from 'react'
// import Headerr from "./ForUnderstandingContext/Headerr"

// export const DataContext = createContext(null);

// const App = () => {
//   const [username, setusername] = useState("very important baat hai kishko nahi batanaa okay")
//   return (
//     <DataContext.Provider value={[username , setusername]} >
//       <Headerr/>
//     </DataContext.Provider>
//   )
// }

// export default App

// ----------------------------------------------------------------------------------------------------------------------------------------------
// css intregration
// import React from 'react'
// import Applycss from './Components/Applycss'
// import Footer from './Components/Footer'



// const cssStyle = {
//   fontSize : "100px",
//   backgroundColor : "pink"
// }

// const App = () => {
//   return (
//     <div> 
//       <h1 style =  { { fontSize : "50px" , backgroundColor :"royalBlue"  }} >inline css</h1>
//       <h1 style= {cssStyle} > internal css </h1>
//       <Applycss/>
//       <Footer/>
//     </div>
//   )
// }

// export default App





// -------------------------------------------------------------------------------------------------------------------




// my ToDo App



// ToDo App



// --------------------------------------------------------------------------------------------------------------------
// In class ( component as a wrapper)

// import React from 'react'
// import Container from './Components/Contaier'

// const App = () => {
//   return (
//     <Container>
//       <h1 className="text-xl font-semibold" >kaise ho liger</h1>
//       <button className="py-1 px-3 rounded bg-stone-300" >explore</button>
//     </Container>
//   )
// }

// export default App


//-----------------------------------------------------------------------------------------------------------------------
// 7. mini task Dynamic Class Toggle
// Create a button that toggles between two CSS classes on an element (e.g., dark and light mode).

// import React, { useState } from 'react'

// const App = () => {
//   const [mode, setMode] = useState(true)

//   return (
//     <div className={`w-screen h-screen pt-10 flex flex-col ${mode?"bg-slate-200" : "bg-yellow-100" }  items-center gap-10 bg-gray-200`} >
//       <button className={`px-2 py-1 ${mode?"bg-black" : "bg-yellow-600" } text-white rounded`} onClick={()=>{setMode((prev)=>!prev)}} >{mode?"Dark mode ": "Light mode"}</button>
//       <div className="flex gap-2 " >

//         <div className={`w-[300px] h-[350px] ${mode?"bg-slate-400" : "bg-yellow-200" }  rounded-sm flex items-center justify-center `}>
//           <h1 className={`font-semibold text-2xl ${mode?"text-white" : "text-black" } `} >Hello kaise ho</h1>
//         </div>
//         <div className={`w-[300px] h-[350px] ${mode?"bg-slate-400" : "bg-yellow-200" } rounded-sm flex items-center justify-center  `} >
//           <h1 className={`font-semibold text-2xl ${mode?"text-white" : "text-black" } `} >Hello kaise ho</h1>

          
//         </div>
//         <div className={`w-[300px] h-[350px] ${mode?"bg-slate-400" : "bg-yellow-200" } rounded-sm flex items-center justify-center  `} >
//           <h1 className={`font-semibold text-2xl ${mode?"text-white" : "text-black" } `} >Hello kaise ho</h1>

          
//         </div>
//         <div className={`w-[300px] h-[350px] ${mode?"bg-slate-400" : "bg-yellow-200" } rounded-sm flex items-center justify-center  `} >
//           <h1 className={`font-semibold text-2xl ${mode?"text-white" : "text-black" } `} >Hello kaise ho</h1>

          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

// ---------------------------------------------------------------------------------------------------------------------


// components and props and children
// import React from 'react'
// import About from './Components/About'
// import Card from './Components/Card'
// import Nav from './Components/Nav'

// const App = () => {
//   return (
//     <div className="w-[30%] p-10 bg-red-500 flex items-center gap-4 flex-col m-auto mt-10 rounded-lg" >
//       <About title={"hello this child one"} />
//       <Nav title={"hello this this is child two"} />
//       <Card title={"this is child three"} >
//         <h1>hello i am tag inside card</h1>
//         <button className="bg-violet-600 rounded px-2 py-1 text-white mt-1" >Explore</button>
//         </Card>

//     </div>
//   )
// }

// export default App


// -----------------------------------------------------------------------------------------------------------------------
// import { useForm } from "react-hook-form";
// const App = () => {
//   const {
//     watch,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   console.log(watch("username"));

//   const SubmitHandler = (data) => {
//     console.log(data);
//     console.log("submitted");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(SubmitHandler)}>
//         {/* you can suppose it as an exception */}
//         <input
//           type="text"
//           autoComplete="off"
//           name="username"
//           placeholder="Username"
//           {...register("username", {
//             required: {
//               value:true,
//               message:"Empty input can't be submitted"
//             },
//             minLength: {
//               value:5,
//               message:"Username must be at least 5 characters"
//             }
//           })}
//         />
//         {errors.username && <p style={{ color: 'red', fontSize: '12px' }} className="text-red-600 ">{errors.username.message}</p>}
//         <button>submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// like and dislike counter

// import React, { useState } from 'react';

// const App = () => {
//   const [likeCount, setLikeCount] = useState(0);
//   const [dislikeCount, setDislikeCount] = useState(0);

//   return (
//     <div className='flex flex-col items-center justify-center h-screen space-y-4'>
//       <button
//         onClick={() => setLikeCount((prev) => prev + 1)}
//         className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>
//         Like {likeCount} {likeCount === 1 ? 'time' : 'times'}
//       </button>

//       <button
//         onClick={() => setDislikeCount((prev) => prev + 1)}
//         className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'>
//         Dislike {dislikeCount} {dislikeCount === 1 ? 'time' : 'times'}
//       </button>
//     </div>
//   );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------
// // 6. Track Mouse Hover
// Create two sections, and when you hover over a section, use useState to display a message indicating which section is being hovered over.

// import React, { useState } from 'react'
// import Session from './Components/Session'

// const App = () => {
//   return (
//     <div className='text-center flex items-center justify-center gap-10  h-screen w-screen bg-gray-600 ' >
//       <Session name={'animal'} />
//       <Session  name={'human'}/>
//     </div>
//   )
// }

// export default App

// -----------------------------------------------------------------------------------------------------------------------

//day 8 underStanding the concept of props and Components

// import React from 'react'
// import Card from './Components/Card'

// const App = () => {

//   const details = [
//     {
//       name : "keshav",
//       address: "rampur",
//       age:69
//     },
//     {
//       name : "vishesh",
//       address: "bundelkhand",
//       age:110
//     },
//     {
//       name : "virendra",
//       address: "ghabra",
//       age:1000
//     },
//   ]

//   return (
//     <div  className='flex justify-center items-center h-screen bg-gray-100'>
//           <div className='grid grid-cols-3 gap-6' >

//           {details.map((person , index)=>{
//             return <Card key={index} name={person.name} address = {person.address} age = {person.age}/>
//           })}
//           </div>
//     </div>
//   )
// }

// export default App

// -----------------------------------------------------------------------------------------------------------------------
// 5. Switch Between Multiple Titles
// Display a title (e.g., "At library") and have buttons to switch between other titles like "At home" or "At work."

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [title, setTitle] = useState("At Home")
//   const locations = [
//     {name : "Home", color:"green"},
//     {name : "Library", color:"blue"},
//     {name : "College", color:"red"},
//     {name : "School", color:"pink"}
//   ]
//   return (
//     <div className="text-center" >
//       <div>
//       <h1 className="m-10 px-2 font-semibold bg-amber-200 inline-block rounded " >{title}</h1>
//       </div>
//       {
//         locations.map((location)=>{
//           return <button key={location.name} className={`rounded px-1 bg-${location.color}-400 m-3 text-white`} onClick={()=>{setTitle(`I am at ${location.name.toLowerCase()}`)}} >{location.name}</button>
//         })
//       }
//     </div>
//   )
// }

// export default App

//--------------------------------------------------------------------------------------------------------------------------------------------

// mini task 4. Text Input Handler

// import "./index.css";
// import "./App.css";

// import React from 'react'
// import { useState } from "react";

// const App = () => {

//   const [userInput, setUserInput] = useState("")

//   const submitHandler = (e)=>{
//     e.preventDefault()
//     if(userInput.trim()){
//       console.log("userInput is : " , userInput)
//       setUserInput("")
//     }else{
//       alert("Please enter valid details")
//     }
//   }
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <form className="flex items-center space-x-2" onSubmit={submitHandler}>

//         <input autoComplete="off" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="text" value={userInput} name="userInput"  onChange={(e)=>setUserInput(e.target.value)}/>

//         <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all" > submit</button>

//       </form>
//         {userInput&& <div><h1  className="mt-5 text-xl font-semibold text-gray-700">Your Input :-  {userInput}</h1></div> }
//     </div>
//   )
// }

// export default App

//--------------------------------------------------------------------------------------------------------------------------------------------

// day "Simple Form with Validation"
// import React, { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [gender, setGender] = useState("");
//   const [error, setError] = useState({ username: false, gender: false });

//   const validateForm = () => {
//     const usernameError = username.length < 5;
//     const genderError = !gender;

//     setError({
//       username: usernameError,
//       gender: genderError,
//     });

//     return !(usernameError || genderError);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted successfully");
//       console.log({ username, gender });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-rose-300">
//       <form
//         onSubmit={submitHandler}
//         className="bg-white w-full max-w-md p-8 rounded-lg shadow-md"
//       >
//         <div className="mb-4">
//           <input
//             className={`border p-2 w-full rounded ${error.username ? 'border-red-500' : 'border-gray-300'}`}
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             onInput={(e) => setError({ ...error, username: e.target.value.length < 5 })}
//           />
//           {error.username && (
//             <p className="text-red-500 text-sm mt-1">Username must be at least 5 characters long</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Gender:</label>
//           <div className="flex items-center mb-2">
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={gender === "male"}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             <label className="ml-2">Male</label>
//           </div>

//           <div className="flex items-center mb-2">
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={gender === "female"}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             <label className="ml-2">Female</label>
//           </div>

//           <div className="flex items-center">
//             <input
//               type="radio"
//               name="gender"
//               value="other"
//               checked={gender === "other"}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             <label className="ml-2">Other</label>
//           </div>

//           {error.gender && (
//             <p className="text-red-500 text-sm mt-1">Please select your gender</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// bhaiya ka code kal vala

// import "./index.css";
// // two way binding

// import React, { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState(false);
//   const [gender, setGender] = useState("others");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(gender);
//   };

//   console.log(gender);

//   return (
//     <div>
//       <form
//         className="flex gap-5 justify-center px-3 py-4 w-screen bg-amber-500"
//         onSubmit={submitHandler}
//       >
//         <input
//           className="rounded"
//           type="text"
//           name="username"
//           placeholder="username"
//           onInput={(e) =>
//             e.target.value.length < 5 ? setError(true) : setError(false)
//           }
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}
//         />

//         {error && (
//           <p className="text-red-500"> username must be atleast 5 char </p>
//         )}

//         <input
//           type="radio"
//           name="gender"
//           // checked={gender === "others" ? true : false}
//           defaultValue="others"
//           onChange={(e) => setGender(e.target.value)}
//         />

//         others

//         <br />
//         <br />
//         <input
//           type="radio"
//           name="gender"
//           checked={false}
//           defaultValue="male"
//           onChange={(e) => setGender(e.target.value)}
//         />
//         male
//         <br />
//         <br />

//         <input
//           type="radio"
//           name="gender"
//           // checked={gender === "female" ? true : false}
//           defaultValue="female"
//           onChange={(e) => setGender(e.target.value)}
//         />
//         female

//         <br />
//         <br />
//         <button className="px-4 py-1 rounded bg-blue-600 text-white">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// //  Change Background Color
//  Create a button that changes the background color of a div when clicked.
//  Use useState to store different colors and cycle through them.
// import React, { useState } from 'react';

// const App = () => {
//   const [index, setIndex] = useState(0);

//   // Define colors in a more flexible way
//   const colors = [
//     "bg-rose-500",
//     "bg-slate-400",
//     "bg-zinc-500",
//     "bg-orange-200",
//     "bg-lime-300",
//     "bg-green-200",
//     "bg-cyan-300"
//   ];

//   // Function to change the index
//   const changeColor = () => {
//     setIndex((prev) => (prev + 1) % colors.length);
//   };

//   return (
//     <div className="flex flex-col items-center w-screen h-screen justify-center gap-3">
//       <div
//         className={`h-[230px] w-[230px] bg-red-200 rounded transition-all duration-500 ${colors[index]}`}
//         role="img"
//         aria-label={`Background color is ${colors[index]}`}
//       ></div>
//       <button
//         onClick={changeColor}
//         className="rounded py-1 px-3 bg-rose-500 hover:bg-rose-600 duration-500 text-white"
//         aria-label="Change background color"
//       >
//         Change Color
//       </button>
//     </div>
//   );
// };

// export default App;

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
//       <h1 >this is react vite boilerplate {im=port.meta.env.VITE_API}</h1>
//       <About/>
//       <Home/>
//       <Nav/>
//     </>
//   )
// }

// export default App
