const Button = ({
  title,
  logo,
  border,
  background,
  color,
  handleLogout,
  height,
  width,
}) => {
  return (
    <div>
      <button
        onClick={handleLogout}
        className="d-flex align-items-center"
        style={{
          width: width ? width : "auto",
          border: border === undefined ? "none" : border,
          background: background,
          padding: "0.875rem 1.75rem 0.875rem 1.75rem",
          display: logo === undefined ? "block" : "inline-block",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "57px",
          color: color,
          fontSize: "1rem",
          fontWeight: "500",
          lineHeight: "1.5rem",
          height: height ? height : "auto",
          position: "relative",
          zIndex: "4",
        }}
      >
        <span className="me-2">{title}</span>
        <img src={logo} alt="" />
      </button>
    </div>
  );
};

export default Button;
