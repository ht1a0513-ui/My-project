import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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

function AppContent({ isAuthenticated, setIsAuthenticated, theme, setTheme }) {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem("event-last-visited-page", location.pathname);
  }, [location.pathname]);

  const ProtectedRoute = ({ children }) => (isAuthenticated ? children : <Navigate to="/login" replace />);

  return (
    <Routes>
      <Route element={<Layout theme={theme} onThemeChange={setTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard/overview" replace />
            ) : (
              <LoginPage onLogin={(userData) => setIsAuthenticated({ isAuthenticated: true, user: userData })} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard onLogout={() => setIsAuthenticated({ isAuthenticated: false, user: null })} />
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
  );
}

function App() {
  const [authState, setAuthState] = useState(() => {
    if (typeof window === "undefined") return { isAuthenticated: false, user: null };

    const storedAuth = localStorage.getItem("event-auth");
    if (!storedAuth) return { isAuthenticated: false, user: null };

    try {
      const parsed = JSON.parse(storedAuth);
      return parsed?.isAuthenticated ? parsed : { isAuthenticated: false, user: null };
    } catch {
      return { isAuthenticated: false, user: null };
    }
  });

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("event-theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("event-auth", JSON.stringify(authState));
  }, [authState]);

  useEffect(() => {
    localStorage.setItem("event-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={`app-shell ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <BrowserRouter>
        <AppContent isAuthenticated={authState.isAuthenticated} setIsAuthenticated={setAuthState} theme={theme} setTheme={setTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
