import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div>
      <h3>Aktif Tema:{theme}</h3>
      <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
        Tema Değiştir
      </button>
    </div>
  );
};

export default Button;
