import { useEffect, useState } from "react";
import { getNews } from "../services/request";
import { useParams } from "react-router-dom";
import { NewsContainerDiv } from "../components/News/NewsContainer/styled";
import { PageViews, SliderContainer } from "./HomeViewStyled";
import { ButtonContainer, LoadingContainer } from "./newsDetailStyles";
import { getAllCurrency } from "../services/request";
import Slider from "../components/Slider/Slider";
import NewsCards from "../components/News/NewsCards/NewsCards";
import Loading from "../components/Loading/Index";
import Currency from "../components/Currency/Currency";

const HomeView = () => {
  const { category } = useParams();
  const [currency, setCurrency] = useState();
  const [sliderNews, setSliderNews] = useState();
  const [news, setNews] = useState();
  const [sliderLoad, setSliderLoad] = useState(true);
  const [cardLoad, setCardLoad] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSliderLoad(true);
    setCardLoad(true);
    category === "economy" &&
      getAllCurrency().then((data) => setCurrency(data));
    getNews(category ? category : "general", "0", "tr")
      .then((data) => setSliderNews(data))
      .then(() => setSliderLoad(false))
      .then(() => setPage(1));
  }, [category]);

  useEffect(() => {
    getNews(category ? category : "general", page, "tr")
      .then((data) => setNews(data))
      .then(() => setCardLoad(false));
  }, [page, category]);

  return (
    <div>
      {category === "economy" && currency && <Currency currency={currency} />}
      <SliderContainer>
        {sliderLoad && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
        {!sliderLoad && sliderNews && (
          <Slider news={sliderNews?.result} page={0} category={category} />
        )}
      </SliderContainer>
      <div>
        {cardLoad && !sliderLoad && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
        <NewsContainerDiv>
          {!cardLoad &&
            news &&
            news?.result?.map((item) => (
              <NewsCards
                key={item.key}
                news={item}
                link={`/newsDetail/${item.key}?page=${page}&category=${
                  category ? category : "general"
                }`}
              />
            ))}
        </NewsContainerDiv>
      </div>
      <ButtonContainer>
        <button
          disabled={page === 1 ? true : false}
          onClick={() => {
            setPage(page - 1);
            setCardLoad(true);
          }}
        >
          Önceki Sayfa
        </button>
        <PageViews>{page}</PageViews>
        <button
          onClick={() => {
            setPage(page + 1);
            setCardLoad(true);
          }}
        >
          Sonraki Sayfa
        </button>
      </ButtonContainer>
      <div></div>
    </div>
  );
};

export default HomeView;
