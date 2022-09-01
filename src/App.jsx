import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/molecules";
import Main from "./pages/Main";
import Year from "./pages/Year";
import routesTypes from "./routes";
import store from "./store";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <section>
        <Header />
        <Routes>
          <Route path={routesTypes.MAIN} element={<Main />} />
          <Route path={routesTypes.YEAR} element={<Year />} />
        </Routes>
      </section>
    </Provider>
  );
}

export default App;
