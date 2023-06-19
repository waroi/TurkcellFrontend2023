import "./App.css";
import { useTheme } from "./context/ThemeContext";
import Button from "./components/Button";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <h1>ContextAPI</h1>
      <Button />
    </div>
  );
}

export default App;
