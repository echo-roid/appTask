
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./landing/Home";

import Layout from "./hoc/Layout";
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route
            exact
            path="/"
            element={
              <Layout
                component={Home}
              />
            }
          />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
