import './App.css';

const myStyle = {

backgroundColor: "blue"
}

function App() {
  return (
    // we should have div b/c it just render one element
    <div className="App">
     <h1 style={{color: "red"}}>Hello World</h1>
     <p style={myStyle}>lorem dsjflkdsjfa</p>
     
    </div>
  );
}

export default App;

// inline style is not working like before in js6 it working like object .
// const myStyle = {
// color: "red" 
// }
// Or
// <h1 style={{color: "red"}}>Hello World</h1>.
