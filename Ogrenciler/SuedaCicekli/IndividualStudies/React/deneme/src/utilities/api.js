// api.jsx

const API_KEY = 'apikey 2aQS3C9tImRHv3JSbIuHn4:571eSwQSccFrpJ4zLdEV24';

export async function getWeather(city) {
  const url = `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`;

  try {
    const response = await fetch(url, {
      headers: {
        authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
