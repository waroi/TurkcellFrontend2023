/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { getNewsDetail } from "../services/request";
import {
  Container,
  Image,
  Title,
  Description,
  Url,
  NewsDate,
  NewsInfo,
  NewsSource,
} from "./newsDetailStyles";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getNewsDetail(
      id,
      searchParams.get("page"),
      searchParams.get("category"),
      "tr"
    ).then((data) => setNews(data));
  }, [id, searchParams]);

  return (
    <>
      <Container>
        <NewsInfo>
          <NewsDate>{new Date(news?.date).toLocaleDateString()}</NewsDate>
          <NewsSource>{news?.source}</NewsSource>
        </NewsInfo>
        <Image src={news?.image} alt={news?.title} />
        <Title>{news?.name}</Title>
        <Description>{news?.description}</Description>
        <Url href={news?.url} target="_blank" rel="noreferrer">
          <button>Kaynak Habere Gidin</button>
        </Url>
      </Container>
    </>
  );
};

export default NewsDetail;
