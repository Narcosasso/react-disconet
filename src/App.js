import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Login";
import AppRoutes from "./AppRoutes";
import "antd/dist/reset.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Al primo caricamento, controlla se c'è autenticazione salvata
  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Quando cambia autenticazione, aggiorna localStorage
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <AppRoutes onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
