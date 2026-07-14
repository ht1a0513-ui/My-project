import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";
import { ActionButton } from "../assets/Components/Common/ActionButton";

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title="Dashboard" description="Manage your events from one place" />

      <div className="dashboard-shell">
        <aside className="sidebar-panel">
          <NavLink to="/dashboard/overview" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>Overview</NavLink>
          <NavLink to="/dashboard/profile" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>Profile</NavLink>
          <NavLink to="/dashboard/settings" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>Settings</NavLink>
        </aside>

        <div className="dashboard-content">
          <SectionCard title="Dashboard Hub" subtitle="Navigate to sub-sections and manage the system">
            <p>Use the nested routes to explore overview, profile, and settings pages.</p>
            <div className="form-actions">
              <ActionButton label="Back Home" variant="secondary" onClick={() => navigate("/")} />
              <ActionButton label="Logout" variant="primary" onClick={() => {
                onLogout();
                navigate("/login");
              }} />
            </div>
          </SectionCard>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
