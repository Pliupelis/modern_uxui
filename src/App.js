import React from "react";
import "./App.css";
import {
  Footer,
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
