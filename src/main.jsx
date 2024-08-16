import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Produto from './Produto'
import Oferta from './Oferta'
import App from './App'
import "./globals.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<App/>} path='/'/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Produto" element={<Produto />} />
        <Route path="/Oferta" element={<Oferta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)