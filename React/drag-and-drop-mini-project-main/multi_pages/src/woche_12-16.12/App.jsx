import "./App.css";
import { useState } from "react";
// using states (like a variable that holds data)
// using events

// function App() {
// //   const age = 0;

//   let age = 0;

//   const increaseAge =() => {
//     // age = age +1;
//     age++;
//     console.log(age);
//   }

//   return (
//     <div className="App">
//       {age} <button onClick={increaseAge}>Increase your age</button>
//     </div>
//   );
// }

// ###### but only console is working, but not the button!
// because React the component only once!
// Hook = function wich starts with "use"

// import {useState}  from "react";

// function App() {

//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age +1);
//   };

//   return (
//     <div className="App">
//       {age}
//       <button onClick={increaseAge}>Increase your age</button>
//     </div>
//   );
// }

// function App() {

//   const [inputValue, setInputValueAge] = useState("");

//   const inputChange = (event) => {
//     // console.log(event.target.value);
//     // into console the value of input field

//     setInputValueAge(event.target.value);
//   };

//   return (
//     <div className="App">
//       <input type="text" onChange={inputChange}/>
//      <div>{inputValue}</div> 
//     </div>
//   );
// }

// function App() {
//   const [showText, setShowText] = useState(true);
//   return (
//     <div className="App">
//       <button onClick={() => {
//           setShowText(!showText);
//         }}>

//         Show/Hide
//       </button>
//       {showText === true && <h1> WELCOME to ReDI</h1>}
//     </div>
//   );
// }

// function App() {
//   const [textColor, setTextColor] = useState("black");
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setTextColor(textColor === "black" ? "red" :"black");
//         }}
//       >
//         Toggle Color
//       </button>
//       <h1 style={{color:textColor}}> WELCOME to ReDI</h1>
//     </div>
//   );
// }

// ############## Exercise - make a counter with 3 buttons to increase/decrease and reset
function App() {
  const [count, setCount] = useState(0);

//   const increaseValue = () => {
//     setCount(count +1);
//   };
//   const decreaseValue = () => {
//     setCount(count -1);
//   };
//   const zeroValue = () => {
//     setCount(0);
//   };

//   return (
//     <div className="App">
//       <button onClick={increaseValue}>Increase</button>
//       <button onClick={decreaseValue}>Decrease</button>
//       <button onClick={zeroValue}>Set to Zero</button>
//         <h1>{count}</h1>
//     </div>
//   );
  return (
    <div className="App">
      <button onClick={ () => setCount(count +1)}>Increase</button>
      <button onClick={ () => setCount(count -1)}>Decrease</button>
      <button onClick={ () => setCount(0)}>Set to Zero</button>
        <h1>{count}</h1>
    </div>
  );
}
export default App;
