import Router from "./routes/Router";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <div>Footer</div>
    </>
  );
}

export default App;
