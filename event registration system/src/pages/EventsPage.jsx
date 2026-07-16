import { useMemo, useState } from "react";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";
import { ActionButton } from "../assets/Components/Common/ActionButton";
import "./EventsPage.css";

const STORAGE_KEY = "event-registration-data";
const SEARCH_KEY = "event-search-term";
const FILTER_KEY = "event-category-filter";

const initialEvents = [
  { id: 1, name: "React Workshop", date: "2026-07-20", venue: "Seminar Hall", category: "Workshop", description: "Hands-on session for modern React patterns." },
  { id: 2, name: "Hackathon", date: "2026-07-25", venue: "Auditorium", category: "Competition", description: "Build and pitch a prototype in 24 hours." },
  { id: 3, name: "AI Bootcamp", date: "2026-07-30", venue: "Lab-2", category: "Training", description: "Discover practical AI workflows and tools." },
];

const emptyForm = {
  name: "",
  date: "",
  venue: "",
  category: "Workshop",
  description: "",
};

function loadEvents() {
  if (typeof window === "undefined") return initialEvents;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return initialEvents;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : initialEvents;
  } catch {
    return initialEvents;
  }
}

function EventsPage() {
  const [events, setEvents] = useState(loadEvents);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(() => sessionStorage.getItem(SEARCH_KEY) || "");
  const [selectedCategory, setSelectedCategory] = useState(() => sessionStorage.getItem(FILTER_KEY) || "all");
  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  const persistedEvents = JSON.stringify(events);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, persistedEvents);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setStatus("");
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setError("");
    setStatus("");
  };

  const startEdit = (event) => {
    setEditingId(event.id);
    setFormData({
      name: event.name,
      date: event.date,
      venue: event.venue,
      category: event.category,
      description: event.description,
    });
    setError("");
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Event name is required.");
      return;
    }

    if (!formData.date) {
      setError("Event date is required.");
      return;
    }

    if (!formData.venue.trim()) {
      setError("Venue is required.");
      return;
    }

    if (editingId) {
      setEvents((prev) => prev.map((event) => (event.id === editingId ? { ...event, ...formData } : event)));
      setStatus("Event updated successfully.");
    } else {
      const newEvent = {
        id: Date.now(),
        ...formData,
        name: formData.name.trim(),
        venue: formData.venue.trim(),
        description: formData.description.trim(),
      };

      setEvents((prev) => [newEvent, ...prev]);
      setStatus("Event added successfully.");
    }

    resetForm();
  };

  const confirmDelete = (id) => setPendingDeleteId(id);

  const handleDelete = () => {
    setEvents((prev) => prev.filter((event) => event.id !== pendingDeleteId));
    setPendingDeleteId(null);
    setStatus("Event deleted successfully.");
  };

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = `${event.name} ${event.venue} ${event.description}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [events, searchTerm, selectedCategory]);

  if (typeof window !== "undefined") {
    sessionStorage.setItem(SEARCH_KEY, searchTerm);
    sessionStorage.setItem(FILTER_KEY, selectedCategory);
  }

  return (
    <div className="events-page">
      <PageHeader title="Events" description="Persist event records, manage them locally, and keep your work after refresh" />

      <SectionCard title="Event Manager" subtitle="Add, edit, or remove records with local storage persistence">
        <div className="events-toolbar">
          <input
            className="input-field"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, venue, or detail"
          />
          <select className="input-field" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All categories</option>
            <option value="Workshop">Workshop</option>
            <option value="Competition">Competition</option>
            <option value="Training">Training</option>
          </select>
        </div>

        {status ? <div className="success-message">{status}</div> : null}
        {error ? <div className="error-summary">{error}</div> : null}

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="name">Event Name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="date">Event Date</label>
            <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="venue">Venue</label>
            <input id="venue" name="venue" value={formData.venue} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange}>
              <option value="Workshop">Workshop</option>
              <option value="Competition">Competition</option>
              <option value="Training">Training</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" />
          </div>

          <div className="form-actions">
            <ActionButton label={editingId ? "Save Changes" : "Add Event"} variant="primary" type="submit" />
            <ActionButton label="Reset" variant="secondary" type="button" onClick={resetForm} />
          </div>
        </form>
      </SectionCard>

      {pendingDeleteId ? (
        <SectionCard title="Confirm Delete" subtitle="This removes the event from local storage immediately">
          <p>Delete this event from the saved list?</p>
          <div className="form-actions">
            <ActionButton label="Cancel" variant="secondary" type="button" onClick={() => setPendingDeleteId(null)} />
            <ActionButton label="Delete" variant="danger" type="button" onClick={handleDelete} />
          </div>
        </SectionCard>
      ) : null}

      <SectionCard title="Stored Events" subtitle="Your records are dynamically displayed and persist after refresh">
        {filteredEvents.length ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="event-card__header">
                  <h3>{event.name}</h3>
                  <span className="event-pill">{event.category}</span>
                </div>
                <p>{event.description}</p>
                <ul className="event-meta">
                  <li><strong>Date:</strong> {event.date}</li>
                  <li><strong>Venue:</strong> {event.venue}</li>
                </ul>
                <div className="form-actions">
                  <ActionButton label="Edit" variant="secondary" type="button" onClick={() => startEdit(event)} />
                  <ActionButton label="Delete" variant="danger" type="button" onClick={() => confirmDelete(event.id)} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-state">No events match the current search and filter.</p>
        )}
      </SectionCard>
    </div>
  );
}

export default EventsPage;
