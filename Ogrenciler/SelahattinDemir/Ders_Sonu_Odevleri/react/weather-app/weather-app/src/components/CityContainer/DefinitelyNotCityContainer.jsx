/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CityItem from "./components/CityItem/DefinitelyNotCityItem";
import CityImage from "./components/CityImage/DefinitelyNotWeatherImage";
import styled from "styled-components";

const DefinitelyNotCityContainer = ({ weather }) => {
  const [fullCountry, setFullCountry] = useState("");

  const StyledDatas = styled.div`
    color: white;
    background: rgba(123, 123, 123, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    max-width: 400px;
  `;

  const Styledh1 = styled.h1`
    padding: 20px;
    padding-top: 40px;
  `;
  const Styledh2 = styled.h2`
    margin-top: -40px;
    margin-bottom: 20px;
    font-size: 30px;
  `;
  const getCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3/alpha/${weather.sys.country}`
      );
      const data = await response.json();
      const countryFullName = data[0].name.common;
      setFullCountry(countryFullName);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    if (weather.sys && weather.sys.country) {
      getCountry();
    }
  }, [weather]);

  const capitalizeFirstLetter = (string) => {
    return string
      .toLowerCase()
      .replace(/(^|\s)\w/g, (match) => match.toUpperCase());
  };

  return (
    <div>
      {weather.main && (
        <StyledDatas>
          <Styledh1>
            {weather.name}, {fullCountry}
          </Styledh1>
          <CityImage weather={weather} />
          <Styledh2>
            {capitalizeFirstLetter(weather.weather[0].description)}
          </Styledh2>
          <CityItem weather={weather} />
        </StyledDatas>
      )}
    </div>
  );
};

export default DefinitelyNotCityContainer;
