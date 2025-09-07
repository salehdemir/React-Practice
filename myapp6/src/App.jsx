//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

import "./App.css"

function App() {
return(
  <>
 <div>
  <h1>Main page</h1>
 </div>
  </>
)
}

export default App;





// 1: Prev Seperate operators
// import { useState } from "react";
// const [inputText , setInputText] = useState("")
// const [items , setitems] = useState([])

// function changeHandle(event){
//  const inputValue = event.target.value
//  setInputText(inputValue)
// }

// function addItems (){
//   setitems (prev => {
// return[
//   ...prev,
//   inputText
//   ]
//   },
//   setInputText("")
// )
// }



//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input type="text"  onChange={changeHandle} value={inputText}/>
//         <button onClick={addItems}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//          {items.map(item =>{
//          return <li>{item}</li>
//          })}
//         </ul>
//       </div>
//     </div>
//   );

