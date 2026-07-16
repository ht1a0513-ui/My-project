import "./Participants.css";
import { PageHeader } from "../../../Components/Common/PageHeader";
import { SectionCard } from "../../../Components/Common/SectionCard";
import { InfoRow } from "../../../Components/Common/InfoRow";

function Participants() {
  const participants = [
    { id: 1, name: "Rahul", event: "React Workshop", status: "Confirmed", badge: "High Priority" },
    { id: 2, name: "Sneha", event: "Hackathon", status: "Pending", badge: "Review" },
    { id: 3, name: "Kiran", event: "AI Bootcamp", status: "Confirmed", badge: "Ready" },
  ];

  const hasParticipants = participants.length > 0;

  return (
    <div>
      <PageHeader title="Participants" description="Track the people registered for events" />

      <SectionCard title="Registered Attendees" subtitle="Use the list to check attendance status">
        {hasParticipants ? (
          <>
            <div className="participants-grid">
              {participants.map((participant) => (
                <div className="participant-card" key={participant.id}>
                  <div className="participant-card__header">
                    <h3>{participant.name}</h3>
                    <span className="participant-badge">{participant.badge}</span>
                  </div>
                  <p>{participant.event}</p>
                  <p className={participant.status === "Confirmed" ? "participant-status confirmed" : "participant-status pending"}>
                    {participant.status}
                  </p>
                </div>
              ))}
            </div>

            <div className="participants-table-wrap">
              <table className="participants-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant) => (
                    <tr key={participant.id}>
                      <td>{participant.name}</td>
                      <td>{participant.event}</td>
                      <td>{participant.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <h3>No participants yet</h3>
            <p>Registered attendees will appear here once the first event registration is completed.</p>
          </div>
        )}
      </SectionCard>
    </div>
  );
}

export default Participants;