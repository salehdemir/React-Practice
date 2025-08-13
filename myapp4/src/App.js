import './App.css';
import Cart from './cart';
import Contact from './contact';

function App() {
  return (
    <div className="App">
  <Cart 
  image = {Contact[0].img}
  name = {Contact[0].name}
  desc = {Contact[0].desc}
  />
  <Cart 
   image = {Contact[1].img}
  name = {Contact[1].name}
  desc = {Contact[1].desc}
  />
  <Cart 
  image = {Contact[2].img}
  name = {Contact[2].name}
  desc = {Contact[2].desc}
  />
  <Cart 
  image = {Contact[3].img}
  name = {Contact[3].name}
  desc = {Contact[3].desc}
  />
  <Cart 
  image = {Contact[4].img}
  name = {Contact[4].name}
  desc = {Contact[4].desc}
  />

    </div>
  );
}

export default App;
