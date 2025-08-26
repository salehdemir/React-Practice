import "./App.css"
import { useState } from 'react';

function App() {
   const [first, second] = useState("Hello")
   const [firstStyle, hoverStyle] = useState(false)
  
  function changeText (){
    second("bye")
  }
  function hover (){
    hoverStyle(true)
  }
  function out (){
    hoverStyle(false)
  }



  return (
<div> 
    <h1>{first}</h1>
  <input type="text" placeholder='Enter your name' />
  <button onClick={changeText} onMouseOut={out} onMouseOver={hover} style={{backgroundColor : firstStyle ? "black" : "white" }}>Submit</button>
</div>
  );
}

export default App;















 
