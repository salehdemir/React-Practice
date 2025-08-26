import "./App.css"
import { useState } from 'react';

function App() {
   const [first, second] = useState("Hello")
  
  function changeText (){
    second("bye")
  }

  return (
<div>
    <h1>{first}</h1>
  <input type="text" placeholder='Enter your name' />
  <button onClick={changeText}>Submit</button>
</div>
  );
}

export default App;















 
