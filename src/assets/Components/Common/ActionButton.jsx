import "./ActionButton.css";

function ActionButton({ label, variant = "primary", onClick, type = "button" }) {
  return (
    <button className={`action-btn ${variant}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export { ActionButton };
export default ActionButton;
