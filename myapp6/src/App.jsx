import { useState } from 'react'
import './App.css'

function App() {

  const [isActive , setIsactive] = useState(true)

  

  return (
    <>
<button className={isActive ? "active" : "inActive"} onClick={ ()=> setIsactive(!isActive)}>Click Me</button>
 
    </>
  )
}

export default App





  //  1: Toggle btn
  //  const [isVisible , setIsvisible] = useState(false)
  //   return (
  //   <>
  // <button onClick={()=> setIsvisible(!isVisible)}>Toggle</button>

  // {isVisible && <div>Content to show or hide</div>}
  //   </>
  // )



// 2: input value
  //   const [value , setValue] = useState("")
  // function changHandle (e){
  //  setValue(e.target.value)
  // }
  //   return (
  //   <>
  // <input type="text"  value={value} onChange={changHandle} />
 
  //   </>
  // )
