import React from 'react'
import Home from './Pages/home'
import './App.css'
import { CategoryProvider } from './Contexs/categoryContext';

function App() {
  return (
    <CategoryProvider>
      <Home/>
    </CategoryProvider>
  );
}

export default App;
