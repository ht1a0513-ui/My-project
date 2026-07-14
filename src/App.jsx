import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./pages/DashboardOverview";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardSettings from "./pages/DashboardSettings";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return JSON.parse(localStorage.getItem("event-auth") || "false");
  });

  useEffect(() => {
    localStorage.setItem("event-auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const ProtectedRoute = ({ children }) => (isAuthenticated ? children : <Navigate to="/login" replace />);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard onLogout={() => setIsAuthenticated(false)} />
              </ProtectedRoute>
            }
          >
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          <Route path="/events" element={<EventsPage />} />
          <Route path="/details/:id" element={<EventDetailsPage />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
