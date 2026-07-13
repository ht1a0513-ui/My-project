import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h2>15</h2>
          <p>Total Events</p>
        </div>

        <div className="card">
          <h2>250</h2>
          <p>Participants</p>
        </div>

        <div className="card">
          <h2>5</h2>
          <p>Upcoming Events</p>
        </div>

        <div className="card">
          <h2>8</h2>
          <p>Completed Events</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;