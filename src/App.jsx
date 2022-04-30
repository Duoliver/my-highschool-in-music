import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Year from "./pages/Year";
import routesTypes from "./routes";

function App() {
  return (
    <section>
      <Routes>
        <Route path={routesTypes.MAIN} element={<Main />} />
        <Route path={routesTypes.YEAR} element={<Year />} />
      </Routes>
    </section>
  );
}

export default App;
