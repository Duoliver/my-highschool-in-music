import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/molecules";
import Main from "./pages/Main";
import Year from "./pages/Year";
import routesTypes from "./routes";

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path={routesTypes.MAIN} element={<Main />} />
        <Route path={routesTypes.YEAR} element={<Year />} />
      </Routes>
    </section>
  );
}

export default App;
