import { useParams, useNavigate } from "react-router-dom";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";
import { ActionButton } from "../assets/Components/Common/ActionButton";

const eventData = {
  1: { title: "React Workshop", date: "20 July 2026", location: "Online" },
  2: { title: "Hackathon", date: "25 July 2026", location: "Tech Hub" },
  3: { title: "AI Bootcamp", date: "30 July 2026", location: "Campus Hall" },
};

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventData[id];

  return (
    <div>
      <PageHeader title="Event Details" description="Dynamic route details for the selected event" />

      {event ? (
        <SectionCard title={event.title} subtitle="Selected from the route parameter">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <ActionButton label="Back to Dashboard" variant="secondary" onClick={() => navigate("/dashboard")} />
        </SectionCard>
      ) : (
        <SectionCard title="Event not found" subtitle="The selected event does not exist">
          <p>Try visiting a valid route such as /details/1.</p>
        </SectionCard>
      )}
    </div>
  );
}

export default Details;
