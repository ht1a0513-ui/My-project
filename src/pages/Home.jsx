import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";

function Home() {
  const [recentIds, setRecentIds] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recent-events") || "[]");
    setRecentIds(saved);
  }, []);

  return (
    <div>
      <PageHeader title="Home" description="Welcome to the updated event registration portal" />

      <SectionCard title="Explore the system" subtitle="Navigate through the app using the links above">
        <p>Use the navigation bar to access the dashboard, login page, and event information.</p>
        <Link to="/dashboard" className="action-link">Go to Dashboard</Link>
      </SectionCard>

      <SectionCard title="Recently Viewed" subtitle="Saved locally in your browser">
        {recentIds.length > 0 ? (
          <ul>
            {recentIds.map((id) => (
              <li key={id}><Link to={`/details/${id}`}>Event {id}</Link></li>
            ))}
          </ul>
        ) : (
          <p>No recently viewed events yet.</p>
        )}
      </SectionCard>
    </div>
  );
}

export default Home;
