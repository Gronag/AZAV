import "./App.css";
import Counter from "./Count";




function clickMe() {
  alert(`You clicked `)
}

function App() {
  const arr1 = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
  <div className="App"> 
    <h1>Hello World!</h1>
    <div className="btns">
      <button onClick={clickMe}>Click Me</button>
    </div>
    <Counter />

  </div>
  )
}

export default App;
