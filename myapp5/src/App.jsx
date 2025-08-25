import './App.css'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(2)

function increase() {
  setCount(count + 1 )}

function decrease() {
  setCount(count - 1 )}

  return ( 
      <div>
        <div className="container">
    <h1>{count}</h1>
    <button onClick={increase} >+</button>
    <button onClick={decrease} >-</button>
      </div>
      </div>

  )
}

export default App
