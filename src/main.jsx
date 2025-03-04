import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductIndividual from './pages/ProductIndividual';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/wears" element={<Products />} />
            <Route path="/jacket" element={<ProductIndividual />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
)