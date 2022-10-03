import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import SignInPage from "./Components/pages/SignInPage";
import CardsPage from "./Components/pages/CardsPage";

import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/card" element={<CardsPage />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
