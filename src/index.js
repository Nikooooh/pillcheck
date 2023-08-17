import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Componentes/Header/Header';
import Sobre from './Componentes/Routes/Sobre';
import Home from './Componentes/Routes/Home';
import Contato from './Componentes/Routes/Contato';
import Pesquisa from './Componentes/Routes/Pesquisa';
import ProductDetail from './Componentes/ProductsDetails/CloridratoDeOndansetrona';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/pesquisa' element={<Pesquisa />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
