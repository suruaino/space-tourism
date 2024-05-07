import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/main/Home";
import Moon from "./components/main/destination/Moon"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Moon />
    </div>
  );
}

export default App;
