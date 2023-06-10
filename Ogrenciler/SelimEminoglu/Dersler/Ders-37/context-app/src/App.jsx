import "./App.css";
import { useTheme } from "./context/ThemeContext";
import Button from "./components/Button";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <h1>ContextAPI</h1>
      <Button />
    </>
  );
}

export default App;
