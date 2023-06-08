const API_KEY = "8a4207ac2a1148dfb82d6414c5d102e3";

export async function getNews() {
  const url = `https://newsapi.org/v2/top-headlines?q=microsoft&from=2023-06-08&sortBy=popularity&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url, {
      headers: {
        authorization: `apikey ${API_KEY}`,
      },
    });
    if (response.status != 200) {
      throw new Error("Veri Alınamadı");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
