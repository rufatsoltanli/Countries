import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import "./style.css"
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" />

        </Routes>
      </BrowserRouter></>
  );
}

export default App;