import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Produto from './Produto'
import Oferta from './Oferta'
import Carrinho from './Carrinho/Carrinho'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Produto" element={<Produto />} />
        <Route path="/Oferta" element={<Oferta />} />
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)