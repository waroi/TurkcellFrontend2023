const API_KEY = "7e45fcf6abc3797b7e7527f351e5d089";
const URL = "https://api.openweathermap.org/data/2.5/onecall";
const GEO = "https://api.openweathermap.org/geo/1.0/direct";

export const weatherForecast = async (loc) => {
  const geoResponse = await fetch(`${GEO}?q=${loc}&appid=${API_KEY}`);
  const geoData = await geoResponse.json();
  const lat = geoData[0].lat;
  const lon = geoData[0].lon;
  const name = geoData[0].name;

  return [`${URL}?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}` , name];
};
