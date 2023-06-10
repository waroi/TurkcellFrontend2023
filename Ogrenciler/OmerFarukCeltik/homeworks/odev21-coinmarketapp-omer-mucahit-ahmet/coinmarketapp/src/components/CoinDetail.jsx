import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../context/FetchContext';
import NotFound from './NotFound';

const CoinDetail = () => {
  const { datas } = useFetch();
  const { id } = useParams();
  const currentCoin = datas.find((item) => item.id == id);
  console.log(currentCoin);
  console.log(id);
  if(!currentCoin){
    return <NotFound/>
  }
  return (
    <div className='container p-5'>
      <div className='headContent d-flex align-items-center'>
        <div><img src={currentCoin?.icon} alt="" /></div>
        <div className='h2 ms-4'>{currentCoin?.name}</div>
      </div>
      <div className='d-flex align-items-center'>
        <div className='me-3'>
          <div className='fs-5 my-3'>Twitter URL: <a href={currentCoin?.twitterUrl}>{currentCoin?.twitterUrl}</a></div>
          <div className='fs-5 my-3'>Available Supply: {currentCoin?.availableSupply.toLocaleString()} {currentCoin?.symbol}</div>
          <div className='fs-5 my-3'>Total Supply: {currentCoin?.totalSupply.toLocaleString()} {currentCoin?.symbol}</div>
        </div>
        <div className='ms-5'>
          <div className='fs-5 my-3'>1 Hour Price Change: <span className={Number(currentCoin?.priceChange1h) > 0 ? "text-success" : "text-danger"}>{currentCoin?.priceChange1h} % </span></div>
          <div className='fs-5 my-3'>1 Day Price Change: <span className={Number(currentCoin?.priceChange1d) > 0 ? "text-success" : "text-danger"}>{currentCoin?.priceChange1d} % </span></div>
          <div className='fs-5 my-3'>1 Week Price Change: <span className={Number(currentCoin?.priceChange1w) > 0 ? "text-success" : "text-danger"}>{currentCoin?.priceChange1w} % </span></div>
        </div>
      </div>
      <div className='fs-5 text-secondary'>Volume: {currentCoin?.volume.toLocaleString().slice(0,10)} K</div>
      <div className='fs-5'>Price: <span className='text-success'>{currentCoin?.price.toString().slice(0,7)} $ </span></div>
    </div>
  )
}

export default CoinDetail