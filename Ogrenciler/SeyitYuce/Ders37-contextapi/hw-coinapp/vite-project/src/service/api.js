export const getAllCoins = async () => {
  try {
    const res = await fetch("https://api.coinstats.app/public/v1/coins?skip=0");
    const allCoinData = await res.json();
    return allCoinData;
  } catch (err) {
    return console.log(err);
  }
};
export const getNews = async () => {
  const url =
    "https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin?max_articles=10&last_n_hours=48&top_n_keywords=10";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d7b05a9c89mshbf803db5887cef9p186790jsndefd941dc873",
      "X-RapidAPI-Host": "crypto-news11.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(url, options);
    const result = await res.json();
    return result;
  } catch (err) {
    return console.log(err);
  }
};
export const getChartData = async (coinName) => {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=7`
    );
    const chartData = await res.json();
    return chartData;
  } catch (err) {
    return console.log(err);
  }
};
