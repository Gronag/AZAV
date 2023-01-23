import './App.css';

// function App() {
//   const name = <h1>David Rentzschke</h1>
//   const age = <h2>I am 32 years old</h2>
//   const email = <h2>davidrentzschke@gmx.net</h2>
//   const person = <div>{name}{age}{email}</div>
//   return (
//     <div className="App">
//       {person}
//     <Person1 name="Rana" age={25}></Person1>
//     </div>
//   );
// }
function App() {
  // const age = 4;
  // if (age>18) {
  //   return (<div className='Drink'>Can Drink</div>)
  // } else {
  //   return (<div className='Drink'>Cannt Drink</div>)
  // };
// --------------------------------------------------------

  // const marks = 70;
  // return (
  //   <div className='practice'>{ (marks >= 50) ? "You have passed" : "You have not passed" }</div>
  //   )

  const age = 4;
  return (
    <div className='flex-box'>{ (age >= 18) ? "You can drink" : "Cannot Drink" }</div>
  )

}

// function Person1(props) {
//   const name2 = props.name;
//   const age2 = 25;
//   return(
//     <div>
//       <h1>Hello from {name2}</h1>
//       <h2>I am {age2} years old</h2>
//     </div>
//   )
// }

export default App;
