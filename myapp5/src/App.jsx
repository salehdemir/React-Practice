import "./App.css"
import { useState } from 'react';

function App() {
 
  const [first , second]  = useState("Hello")
  const [firstStyle, hoverStyle] = useState(false)
  const [name, useName] = useState("")

   function hover (){
    hoverStyle(true)
  }
  function out (){
    hoverStyle(false)
  }

  function changeText(){
    second("bye")
  }


  function changedText(event){
  useName(event.target.value)
  }


 
  return (
<div> 
    <h1>{first} {name}</h1>
  <input type="text" placeholder='Enter your name' onChange={changedText}  />
  <button onClick={changedText} onMouseOut={out} onMouseOver={hover} style={{backgroundColor : firstStyle ? "black" : "white" }}>Submit</button>
</div>
  );
}

export default App;





















 
