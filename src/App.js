import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contribute from "./page/Contribute";
import Home from "./page/Home";

function App() {
  return (
    <div className="deepLove">
      <Routes>
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
