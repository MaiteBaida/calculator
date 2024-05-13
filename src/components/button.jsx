const buttonStyles = {
  number: "btn-number",
  operator: "btn-operator",
  refresh: "btn-refresh",
};

function Button({ type, onClick, label, style, customClass }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn- ${buttonStyles[style]} ${customClass}`}
    >
      {label}
    </button>
  );
}

export default Button;
