import { useState, useEffect } from "react";
import SingleNewCard from "./SingleNewCard";
import {
  HomeDiv,
  ButtonsDiv,
  MagazineButton,
  SporButton,
  TechButton,
  GeneralButton,
  AllNewsContainer,
} from "./HomeandCardStyle";

const Home = () => {
  const [allNews, setAllNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [color, setColor] = useState("white");

  const getNewsDatas = async () => {
    const response = await fetch(
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "apikey 6BYoNNxAhL1Lb94WTcWd0q:5nIQ1u4JjTAYKxc8qOYD2n",
        },
      }
    );
    const data = await response.json();
    setAllNews(data.result);
  };

  useEffect(() => {
    getNewsDatas();
  }, [category]);

  const handleClick = (e) => {
    setCategory(e.target.textContent.toLowerCase());
  };

  return (
    <HomeDiv bgcolor={color}>
      <ButtonsDiv>
        <GeneralButton
          onClick={(e) => {
            handleClick(e);
            setColor("white");
          }}
        >
          General
        </GeneralButton>
        <MagazineButton
          onClick={(e) => {
            handleClick(e);
            setColor("#C8B4D5");
          }}
        >
          Magazine
        </MagazineButton>
        <SporButton
          onClick={(e) => {
            handleClick(e);
            setColor("#E2DBD0");
          }}
        >
          Sport
        </SporButton>
        <TechButton
          onClick={(e) => {
            handleClick(e);
            setColor("#9AA8B6");
          }}
        >
          Technology
        </TechButton>
      </ButtonsDiv>
      <AllNewsContainer>
        {allNews.length > 0 &&
          allNews.map((singleNew) => (
            <SingleNewCard singleNew={singleNew} key={singleNew.key} />
          ))}
      </AllNewsContainer>
    </HomeDiv>
  );
};

export default Home;
