import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import './App.css';
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Navbar></Navbar>
           <div id="colorlib-main">
             <Home></Home>
             <About></About>
             <Skills></Skills>
             <Projects></Projects>
           </div>
        </div>
      </div>
  )
}


export default App;
