import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PaginaContato from "./pages/PaginaContato.jsx";

const NaoEncontrado = () => <h1>Página não encontrada</h1>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contato" element={<PaginaContato />} />
      <Route path="*" element={<NaoEncontrado / >} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
