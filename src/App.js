import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import {Routes,Route} from 'react-router-dom';
import './Components/styles.css'

function App() {
  return (
   <div>
    
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
