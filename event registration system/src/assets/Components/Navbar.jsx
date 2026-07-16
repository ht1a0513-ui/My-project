import "./Navbar.css";

function Navbar({ title = "🎉 Event Registration System", subtitle = "Simple and modern event management" }) {
  return (
    <nav className="navbar">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </nav>
  );
}

export default Navbar;