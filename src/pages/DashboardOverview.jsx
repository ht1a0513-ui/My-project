import { SectionCard } from "../assets/Components/Common/SectionCard";

function DashboardOverview() {
  return (
    <SectionCard title="Overview" subtitle="Current event metrics">
      <p>Total events: 15</p>
      <p>Registered participants: 250</p>
      <p>Upcoming sessions: 5</p>
    </SectionCard>
  );
}

export default DashboardOverview;
