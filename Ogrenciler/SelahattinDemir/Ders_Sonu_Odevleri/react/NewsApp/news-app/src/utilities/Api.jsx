
export const getNews = async (country, setNews) => {
  const key3= "d7b05a9c89mshbf803db5887cef9p186790jsndefd941dc873"
  const url = `https://newsdata2.p.rapidapi.com/news?country=${country}&category=sports%2Cpolitics%2Centertainment%2Ctechnology%20&language=${country}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${key3}`,
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
      "X-RapidAPI-Key": "853c53ee46msh641132e0da00db3p13070ajsn3e58301f705d",
      "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  setNews(result);
};
