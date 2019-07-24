import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayOverview from './components/DisplayOverview.js';
import DisplaySingleList from './components/DisplaySingleList.js';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <DisplayOverview />
      <DisplaySingleList />
      
    </div>
  );
}

export default App;
