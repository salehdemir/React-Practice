import "./App.css"
import Cart from "./cart";
import emojipedia from "./emojipedia";

function App() {
function emojiEntry(entry){
  return(
    <Cart
    key = {entry.id}
    emoji = {entry.emoji}
    name = {entry.name}
    meaning = {entry.meaning}
    />
  )
}
 



  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {/* <Cart 
      emoji = {emojipedia[0].emoji}
      name = {emojipedia[0].name}
      meaning = {emojipedia[0].meaning} 
      />
      <Cart 
      emoji = {emojipedia[1].emoji}
      name = {emojipedia[1].name}
      meaning = {emojipedia[1].meaning}
      />
      <Cart 
      
      emoji = {emojipedia[2].emoji}
      name = {emojipedia[2].name}
      meaning = {emojipedia[2].meaning}
       
      /> */}

      {emojipedia.map(emojiEntry)}
      </dl>
    </div>

    
  );

  
}

export default App;
