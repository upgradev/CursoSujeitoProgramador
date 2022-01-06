import React from "react";
import {BrowserRouter} from "react-router-dom";
import Rotas from "./rotas";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      {/* <Router history={history}>
        <Header />
        <Rotas />
      </Router> */}
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
