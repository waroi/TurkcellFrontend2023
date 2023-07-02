import { useTheme } from "../../context/ThemeContext";
const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "light" ? (
        <i className="bi bi-moon-fill" onClick={() => setTheme("dark")}></i>
      ) : (
        <i
          className="bi bi-brightness-high-fill"
          onClick={() => setTheme("light")}
        ></i>
      )}
    </div>
  );
};

export default ThemeIcon;
