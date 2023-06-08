/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {useSearchParams,useParams } from "react-router-dom"
import { getNewsDetail } from "../services/requets";

const NewsDetail = () => {
  const { id } = useParams()
  const [news, setNews] = useState()
  const [searchParams] = useSearchParams();

useEffect(() => {
  getNewsDetail(id,searchParams.get("page"),searchParams.get("category"),"tr").then((data) =>setNews(data))
}, [id,searchParams]);

 
  return (
    <div>{news?.name}</div>
  )
}

export default NewsDetail