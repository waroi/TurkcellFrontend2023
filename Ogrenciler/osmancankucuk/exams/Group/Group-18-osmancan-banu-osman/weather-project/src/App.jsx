import "./App.css";
import WeatherFormm from "./components/WeatherForm/WeatherForm";
import WeatherInfoo from "./components/WeatherInfo/WeatherInfo";
import { Div } from "./appStyle";

function App() {
  return (
    <>
      <Div>
        <WeatherFormm />
        <WeatherInfoo />
      </Div>
    </>
  );
}

export default App;
