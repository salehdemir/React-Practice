import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)




























// 2: import cars from "./parctice.js"
// 1:


// 1: var [cat, dog] = animals
// var {name, sound, feeding : {food : catfood, water : catwater}} = cat
// console.log(catfood)


// 2: var [honda , tesla] = cars

// var { speedStats : {topSpeed : hondaTopSpeed}} = honda
// var { speedStats : {topSpeed : teslaTopSpeed}} = tesla
// var { coloursByPopularity : [hondaTopColour]} = honda
// var { coloursByPopularity : [teslaTopColour]} = tesla

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <table>
//       <thead>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//       <th>Top Colour</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//       <td>{tesla.model}</td>
//       { <td>{teslaTopSpeed}</td> }
//       {<td>{teslaTopColour}</td> }
//     </tr>
//     </tbody>
//     <tfoot>
//     <tr>
//       <td>{honda.model}</td>
//       { <td>{hondaTopSpeed}</td> }
//       { <td>{hondaTopColour}</td> }
//     </tr>
//     </tfoot>
//   </table>
// );

