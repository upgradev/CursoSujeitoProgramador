import React, { Fragment } from "react";
import { BrowserRouter, Routes as Ro, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Fragment>
        <Ro>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contatos" element={<Contato />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="*" element={<Erro />} />
        </Ro>
      </Fragment>
    </BrowserRouter>
  );
};

export default Routes;
