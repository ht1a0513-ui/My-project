import "./Dashboard.css";
import { PageHeader } from "../../Components/Common/PageHeader";
import { StatCard } from "../../Components/Common/StatCard";
import { SectionCard } from "../../Components/Common/SectionCard";
import { ActionButton } from "../../Components/Common/ActionButton";

const summaryCards = [
  { title: "Total Events", value: "15", icon: "🎫", tone: "blue" },
  { title: "Participants", value: "250", icon: "👥", tone: "green" },
  { title: "Upcoming", value: "5", icon: "⏰", tone: "purple" },
  { title: "Completed", value: "8", icon: "✅", tone: "orange" },
];

function Dashboard({ userName }) {
  return (
    <div className="dashboard-page">
      <PageHeader
        title="Dashboard"
        description={userName ? `Welcome back, ${userName}!` : "A quick overview of the event registration system"}
      />

      <div className="dashboard-grid">
        {summaryCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <div className="dashboard-content-grid">
        <SectionCard title="Today's Focus" subtitle="Keep your event schedule organized">
          <p>Review registrations, manage event venues, and keep participants informed.</p>
          <ActionButton label="Open Events" variant="primary" />
        </SectionCard>

        <SectionCard title="Upcoming Highlights" subtitle="Popular events this month">
          <ul className="dashboard-list">
            <li>React Workshop — 20 July</li>
            <li>Hackathon — 25 July</li>
            <li>AI Bootcamp — 30 July</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}

export default Dashboard;