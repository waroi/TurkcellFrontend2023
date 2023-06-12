const key4 = "4479935a9dmsh732a7a215a633d4p1b8ffejsn75e9ae77636e";
export const getNews = async (country, setNews) => {
  const url = `https://newsdata2.p.rapidapi.com/news?country=${country}&category=technology%2Cpolitics%2Centertainment%20&language=${country}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${key4}`,
      "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  setNews(result);
};

export const getNewsByCategory = async (category, setNews) => {
  const url = `https://newsdata2.p.rapidapi.com/news?country=tr&category=${category}&language=tr`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${key4}`,
      "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  setNews(result);
};
