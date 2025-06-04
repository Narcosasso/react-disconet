import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Eventi from "../Pages/Eventi";
import Profilo from "../Pages/Profilo";
import Drink from "../Pages/Drink";
import Biglietti from "../Pages/Biglietti";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventi" element={<Eventi />} />
      <Route path="/profilo" element={<Profilo />} />
      <Route path="/drink" element={<Drink />} />
      <Route path="/biglietti" element={<Biglietti />} />
    </Routes>
  );
}

export default AppRoutes;
