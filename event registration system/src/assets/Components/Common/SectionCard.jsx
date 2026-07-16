import "./SectionCard.css";

function SectionCard({ title, subtitle, children }) {
  return (
    <section className="section-card">
      <div className="section-card__header">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      <div className="section-card__body">{children}</div>
    </section>
  );
}

export { SectionCard };
export default SectionCard;
