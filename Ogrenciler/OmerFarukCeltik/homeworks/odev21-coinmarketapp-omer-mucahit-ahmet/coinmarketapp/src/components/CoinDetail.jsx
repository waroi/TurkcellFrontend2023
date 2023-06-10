import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../context/FetchContext';

const CoinDetail = () => {
  const {datas} = useFetch();
  const {id} = useParams();
  const currentCoin = datas.find((item) => item.id == id);
  return (
    <div>{currentCoin.name}</div>
  )
}

export default CoinDetail