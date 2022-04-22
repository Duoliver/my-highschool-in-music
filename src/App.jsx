import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </section>
  );
}

export default App;
