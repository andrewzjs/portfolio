import { useState } from 'react';
import './App.css';
import HomePage from "../HomePage/HomePage"
import NavBar from '../../components/NavBar/NavBar';
import Projects from '../../components/Projects/Projects'
import Resume from '../../components/Resume/Resume'
import Contact from '../../components/Contact/Contact'


function App() {
  return (

    <main className="App">
      <NavBar element={NavBar} />
      <HomePage element={HomePage} /> 
      <Projects element={Projects} />
      <Resume element={Resume} />
      <Contact element={Contact} />
    </main>
  );
}

export default App;
