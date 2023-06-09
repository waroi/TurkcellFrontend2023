import { useTheme } from "../context/ThemeContext";
const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div> Aktif Tema: {theme}</div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Tema Değiştir
      </button>
    </div>
  );
};

export default Button;
