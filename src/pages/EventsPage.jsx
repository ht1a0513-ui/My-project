import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";
import { ActionButton } from "../assets/Components/Common/ActionButton";
import "./EventsPage.css";

function EventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setEvents(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Something went wrong. Please try again later.");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <PageHeader title="Events" description="Dynamic data fetched from an external API" />

      {loading && <div className="loading-state">Loading events...</div>}
      {error && <div className="error-summary">{error}</div>}

      {!loading && !error && (
        <div className="events-grid">
          {events.map((event) => (
            <SectionCard key={event.id} title={event.title} subtitle={`Post #${event.id}`}>
              <p>{event.body}</p>
              <ActionButton label="View Details" variant="primary" onClick={() => navigate(`/details/${event.id}`)} />
            </SectionCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventsPage;
