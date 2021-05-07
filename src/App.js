import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';

function App() {
  const [cart, setCart] = useState([])
  const handleAddClick = (user) => {
 
     
      const newCart = [...cart, user];  
      setCart(newCart);
    }
    const totalSalary = cart.reduce((total, sum) => total + sum.annualSalary, 0); 
  return (
    <div className="App">
     <Navbar cart={cart}></Navbar>
     <Users salary={totalSalary} cart ={cart} handleAddClick ={handleAddClick}></Users>
    </div>
  );
}

export default App;
