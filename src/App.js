import { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Products from "./Pages/Products";
import ProrductDetails from "./Pages/ProrductDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={() => null}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProrductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;

//rafce
