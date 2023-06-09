import { useTheme } from "../context/ThemeContext";
const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div>AKTİF TEMA : {theme}</div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        TEMA DEĞİŞTİR
      </button>
    </div>
  );
};

export default Button;
