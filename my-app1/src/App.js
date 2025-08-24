import './App.css';
import Login from './login';
import Register from './Register';



// 3. var register = false;

// function isRegister(){
 
//   if(register){
// return <Register/>
//   }else{
//  return   <Login/>
//   }

// }

function App() {

  var register = false;
  return (
 
   <div className='container'>
    <form className='form'>
{register ? <Register/> : <Login/>}
    </form>
   </div>
    
  );
}

export default App;





// 1: inline style is not working like before in js6 it working like object .
// const myStyle = {
// color: "red" 
// }
// Or
// <h1 style={{color: "red"}}>Hello World</h1>.


//2: const myStyle = {

// backgroundColor: "blue"
// }

   // 2: we should have div b/c it just render one element
    // <div className="App">
    //  <h1 style={{color: "red"}}>Hello </h1>
    //  <p style={myStyle}>lorem dsjflkdsjfa</p>
     
    // </div>
