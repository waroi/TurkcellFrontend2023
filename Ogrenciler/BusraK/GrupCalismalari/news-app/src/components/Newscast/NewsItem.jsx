import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatDate } from "../../utils/DateUtils";
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction,
  Container,
  AuthorParagraph,
  DateParagraph,
} from "./NewsItemStyle";
const NewsItem = ({
  id,
  title,
  urlToImage,
  description,
  publishedAt,
  author,
}) => {
  return (
    <Container>
      <Card>
        <CardImage>
          <img src={urlToImage} alt={title} />
          <CardTitle>{title}</CardTitle>
        </CardImage>

        <CardContent>
          <p>{description}</p>
          <AuthorParagraph>{author}</AuthorParagraph>
        </CardContent>

        <DateParagraph>{formatDate(publishedAt)}</DateParagraph>

        <CardAction>
          <Link to={`/news/${id}`}>Read More</Link>
        </CardAction>
      </Card>
    </Container>
  );
};

export default NewsItem;
