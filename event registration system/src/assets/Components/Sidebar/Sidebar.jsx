import "./Sidebar.css";

function Sidebar({ items = [], activePage, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <h3>Quick Links</h3>
        <p>Navigate the system</p>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.key}>
            <button
              type="button"
              className={`sidebar__link ${activePage === item.key ? "active" : ""}`}
              onClick={() => onSelect(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;