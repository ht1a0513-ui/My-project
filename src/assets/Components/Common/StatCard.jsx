import "./StatCard.css";

function StatCard({ title, value, icon, tone = "blue" }) {
  return (
    <article className={`stat-card ${tone}`}>
      <div className="stat-icon">{icon}</div>
      <div>
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </article>
  );
}

export { StatCard };
export default StatCard;
