import { useState } from 'react';
import './App.css';
import HomePage from "../HomePage/HomePage"
import NavBar from '../../components/NavBar/NavBar';


function App() {
  return (

    <main className="App">
      <NavBar element={NavBar} />
      <HomePage element={HomePage} /> 
    </main>
  );
}

export default App;
