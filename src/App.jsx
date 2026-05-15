// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

// páginas dos cards (você pode editar depois)
import Vacinacao from "./pages/vacina";
import Alimentacao from "./pages/alimentacao";
import Agua from "./pages/beberagua";
import Esporte from "./pages/esporte";
import SaudeMental from "./pages/mental";
import IMC from "./pages/imc"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacinacao" element={<Vacinacao />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/beberagua" element={<Agua />} />
        <Route path="/saudemental" element={<SaudeMental />} />
        <Route path="/imc" element={<IMC />} />
        <Route path="/esportefisico" element={<Esporte />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;