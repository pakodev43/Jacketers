import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductIndividual from './pages/ProductIndividual';
import Cart from "./pages/Cart";

import productImage01 from './assets/productImage01.webp'
import productImage02 from './assets/productImage02.webp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/wears/men" element={<Products productImage01={ productImage01 } />} />
            <Route path="/wears/women" element={<Products productImage01={ productImage02 } />} />
            <Route path="/wear" element={<ProductIndividual />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
)