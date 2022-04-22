import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Year from "./pages/Year";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/year/:yearId" element={<Year />} />
      </Routes>
    </section>
  );
}

export default App;
