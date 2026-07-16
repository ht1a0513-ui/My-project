import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";
import { ActionButton } from "../assets/Components/Common/ActionButton";

function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    if (id) {
      const recent = JSON.parse(localStorage.getItem("recent-events") || "[]");
      const updated = [id, ...recent.filter((item) => item !== id)].slice(0, 5);
      localStorage.setItem("recent-events", JSON.stringify(updated));
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Failed to load event details.");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [id]);

  return (
    <div>
      <PageHeader title="Event Details" description="Detailed information for the selected event" />

      {loading && <div className="loading-state">Loading event details...</div>}
      {error && <div className="error-summary">{error}</div>}

      {!loading && !error && event && (
        <SectionCard title={event.title} subtitle={`Event ID: ${event.id}`}>
          <p><strong>Description:</strong> {event.body}</p>
          <p><strong>Category:</strong> Event Post</p>
          <p><strong>Status:</strong> Available</p>
          <ActionButton label="Back to Events" variant="secondary" onClick={() => navigate("/events")} />
        </SectionCard>
      )}
    </div>
  );
}

export default EventDetailsPage;
