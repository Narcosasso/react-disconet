import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Components/MainLayouts";

import Home from "../Pages/Home";
import Eventi from "../Pages/Eventi";
import Drink from "../Pages/Drink";
import Profilo from "../Pages/Profilo";
import Biglietti from "../Pages/Biglietti";

function AppRoutes() {
  return (
    <Routes>
      {/* MainLayout contiene header + footer */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/Eventi" element={<Eventi />} />
        <Route path="/Drink" element={<Drink />} />
        <Route path="/Profilo" element={<Profilo />} />
        <Route path="/Biglietti" element={<Biglietti />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
