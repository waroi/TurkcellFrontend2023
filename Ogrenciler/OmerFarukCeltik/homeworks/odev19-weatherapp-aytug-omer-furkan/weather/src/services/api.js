const URL = "https://api.openweathermap.org/data/2.5/forecast"
const apiKey = "07d464ac349f7281b7c32c4afb11ca53"

export const getCityData = async (cityName) => {
  const response = await fetch(`${URL}?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`);
  const data = await response.json();
	return data;
}

// api.openweathermap.org/data/2.5/forecast?q=izmir&appid=07d464ac349f7281b7c32c4afb11ca53&units=metric&lang=tr