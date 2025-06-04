import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Components/MainLayouts";

import Home from "../Pages/Home";
import Eventi from "../Pages/Eventi";
import Drink from "../Pages/Drink";
import Profilo from "../Pages/Profilo";
import Party from "../Pages/Party";

function AppRoutes() {
  return (
    <Routes>
      {/* MainLayout contiene header + footer */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/Drink" element={<Drink />} />
        <Route path="/Profilo" element={<Profilo />} />
        <Route path="/Party" element={<Party />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;