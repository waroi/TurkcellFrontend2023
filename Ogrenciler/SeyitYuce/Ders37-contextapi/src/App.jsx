import "./App.css";
import Button from "./components/Button";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <h1>ContextApi</h1>
      <Button />
    </div>
  );
}

export default App;
