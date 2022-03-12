import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import ProrductDetails from "./Pages/ProrductDetails";

function App() {
  return (
    <Fragment>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products" element={<Products />}>
            <Route path=":productID" element={<ProrductDetails />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;

//rafce
