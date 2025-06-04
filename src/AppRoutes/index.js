import { Routes, Route } from "react-router-dom";
import MainLayout from "../Pages/MainLayouts";
import Home from "../Pages/Home";
import Drink from "../Pages/Drink";
import Profilo from "../Pages/Profilo";
import Party from "../Pages/Party";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="drink" element={<Drink />} />
        <Route path="profilo" element={<Profilo />} />
        <Route path="party" element={<Party />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
