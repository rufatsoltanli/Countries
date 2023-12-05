import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import MainLayout from "./layout/MainLayout";
import "./style.css"
import DetailsPage from "./pages/details";
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:name" element={<DetailsPage />} />

          </Route>
        </Routes>
      </BrowserRouter></>
  );
}

export default App;
