import { Button, WeatherInput } from "./WeatherFormStyle";
import { useEffect, useRef, useState } from "react";
import { Box } from "./WeatherFormStyle";

const WeatherFormm = ({ setWeather, weather }) => {
  const [error, setError] = useState(false);
  useEffect(() => {}, [error]);
  async function handleSubmit(e) {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value
      .toLowerCase()
      .trim()}&APPID=97d8b9001ba6e85cf96f1158eead208f&units=metric`;
    e.target[0].value = "";
    await fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setWeather(resp))
      .catch((err) => console.log(err));
  }

  const inputElement = useRef(null);
  return (
    <Box>
      <h5 className="mb-4">Please give city information</h5>
      <form onSubmit={(e) => handleSubmit(e)} className="mt-2">
        <WeatherInput
          ref={inputElement}
          className="d-block"
          type="text"
          placeholder="City Name"
        />

        {error && <div>Hata var aga</div>}
        <Button>Search</Button>
      </form>
    </Box>
  );
};

export default WeatherFormm;
