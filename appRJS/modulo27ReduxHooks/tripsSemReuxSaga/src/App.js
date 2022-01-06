import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./rotas";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
