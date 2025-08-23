import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











// Practice

// import emojipedia from "./emojipedia";
// var num = [1,4,15,48,5];
// var newNum =  num.findIndex( (n)=>{ return n > 5 });

// emojipedia.map(function(entry){
//   var newMeaning = entry.meaning.substring(0,20);
//   console.log(newMeaning)
// })
// var num = [1,4,15,48,5];
// var newNum = num.reduce(function (sum, number) {
//   console.log("sum:", sum);
//   console.log("number:", number);
//   return sum * number;
// }); 
// console.log("final:", newNum); 
