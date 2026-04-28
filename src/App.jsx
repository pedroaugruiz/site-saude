// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

// páginas dos cards (você pode editar depois)
// import Consultas from "./pages/Consultas";
// import Exames from "./pages/Exames";
// import Monitoramento from "./pages/Monitoramento";
// import Medicamentos from "./pages/Medicamentos";
// import Emergencia from "./pages/Emergencia";
// import BemEstar from "./pages/BemEstar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/consultas" element={<Consultas />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/emergencia" element={<Emergencia />} />
        <Route path="/bem-estar" element={<BemEstar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;