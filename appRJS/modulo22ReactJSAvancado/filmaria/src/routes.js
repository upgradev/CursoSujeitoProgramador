import { Fragment } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Fragment>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          <Route path="/favoritos" element={<Favoritos />} />

          <Route path="*" element={<Erro />} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Routes;
