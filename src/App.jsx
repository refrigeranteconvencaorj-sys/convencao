import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Healthiness from "./pages/Healthiness";
import VisitFactory from "./pages/VisitFactory";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

import FAQ from "./pages/atendimento/FAQ";
import SAC from "./pages/atendimento/SAC";
import Report from "./pages/atendimento/Report";
import WorkWithUs from "./pages/atendimento/WorkWithUs";
import WhereFind from "./pages/atendimento/WhereFind";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atendimento/trabalhe-conosco" element={<WorkWithUs />} />
        <Route path="/atendimento/faq" element={<FAQ />} />
        <Route path="/atendimento/sac" element={<SAC />} />
        <Route path="/atendimento/denuncia" element={<Report />} />
        <Route path="/atendimento/onde-encontrar" element={<WhereFind />} />
        <Route path="/produtos/:category/:id" element={<Product />} />
        <Route path="/saudabilidade" element={<Healthiness />} />
        <Route path="/visite-nossa-fabrica" element={<VisitFactory />} />
        <Route path="/termos-de-uso" element={<Terms />} />
        <Route path="/politica-de-privacidade" element={<Policy />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
