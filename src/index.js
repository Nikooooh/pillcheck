import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Componentes/Header/Header";

const Sobre = lazy(() => import("./Componentes/Routes/Sobre"));
const Home = lazy(() => import("./Componentes/Routes/Home"));
const Contato = lazy(() => import("./Componentes/Routes/Contato"));
const Pesquisa = lazy(() => import("./Componentes/Routes/Pesquisa"));
const ProductDetail = lazy(() =>
  import("./Componentes/ProductsDetails/CloridratoDeOndansetrona")
);
const DivulgueAqui = lazy(() => import("./Componentes/Routes/Videos"));
const ExclusivePurchasePage = lazy(() =>
  import("./Componentes/Routes/CompraExcluisiva")
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/videos" element={<DivulgueAqui />} />
          <Route path="/compra-exclusiva" element={<ExclusivePurchasePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
