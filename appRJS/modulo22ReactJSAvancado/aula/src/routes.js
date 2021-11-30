import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import Home from "./pages/Home";

const Routes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routes;
