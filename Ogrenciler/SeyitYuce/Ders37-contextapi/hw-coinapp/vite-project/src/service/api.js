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
      "X-RapidAPI-Key": "3e0513eb9dmsh16316a312298d1dp13f6ddjsn09adf746e588",
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
