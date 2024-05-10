import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/main/home/Home";
// import Destination from "./components/main/destination/Destination";
import Crew from "./components/main/crew/Crew";
import Technology from './components/main/technology/Technology';
import Destination from './components/main/destination/Destination';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Destination />
      <Crew />
      <Technology />
    </div>
  );
}

export default App;
