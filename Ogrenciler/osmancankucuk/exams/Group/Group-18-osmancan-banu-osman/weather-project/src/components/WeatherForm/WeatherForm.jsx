import { Button, WeatherInput, Error } from "./WeatherFormStyle";
import { useState } from "react";
import { Box } from "./WeatherFormStyle";
import PropTypes from "prop-types";
const WeatherFormm = ({ setWeather }) => {
  const [errorMessage, setErrorMessage] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value
      .toLowerCase()
      .trim()}&APPID=97d8b9001ba6e85cf96f1158eead208f&units=metric`;
    e.target[0].value = "";

    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setWeather(data);
      } else {
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <h5 className="mb-4">Please give city information</h5>
      <form onSubmit={(e) => handleSubmit(e)} className="mt-2">
        <WeatherInput className="d-block" type="text" placeholder="City Name" />

        {errorMessage && <Error>Bu nasil sehir u-usta!</Error>}
        <Button>Search</Button>
      </form>
    </Box>
  );
};
WeatherFormm.propTypes = {
  setWeather: PropTypes.func,
};
export default WeatherFormm;
