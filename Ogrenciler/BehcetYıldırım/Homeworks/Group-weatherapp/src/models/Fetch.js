class Fetch {
  constructor(
    url = "https://api.collectapi.com/weather/getWeather?data.lang=tr&"
  ) {
    this.url = url;
  }

  async getWeather(city) {
    const response = await fetch(`${this.url}data.city=${city}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: import.meta.env.VITE_API_KEY,
      },
      method: "GET",
    });
    if (response.status === 404) return "404";

    const data = await response.json();

    return data.result;
  }
}

export default Fetch;
