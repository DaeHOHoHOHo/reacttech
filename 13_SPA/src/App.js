import React from "react";
import { Routes } from "react-router-dom";
import About from './About';
import Home from "./Home";

const App = () => {
  return(
    <div>
      <Routes path="/" component={Home} exact={true}/>
      <Routes path="/about" component={About} />
    </div>
  );
};

export default App;