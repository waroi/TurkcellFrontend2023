const API_KEY = "2aQS3C9tImRHv3JSbIuHn4:571eSwQSccFrpJ4zLdEV24";

export async function getNews() {
  const url = `https://api.collectapi.com/news/getNews?country=tr&tag=general`;

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
    return data.result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
