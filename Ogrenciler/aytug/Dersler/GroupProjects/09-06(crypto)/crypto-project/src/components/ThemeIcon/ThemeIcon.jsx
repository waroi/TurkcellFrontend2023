import { useTheme } from "../../context/ThemeContext";
const ThemeIcon = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Tema Değiştir</button>
		</div>
	);
};

export default ThemeIcon;
