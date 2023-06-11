import { useParams } from 'react-router-dom'
import { useCoinList } from '../context/CoinContext';
import { useEffect, useState } from 'react';

const DetailView = () => {
    const {id} = useParams();
    const {coinList} =useCoinList();
    const[coin,setCoin]= useState();
  
  useEffect(()=>{
   let newCoin = coinList.find((element)=>element.id === id)
    setCoin(newCoin);
    console.log(coinList);
    console.log(newCoin)
  },[id])
  return (
    <div>DetailView
<div>{console.log(coin?.symbol)}</div>
    </div>
  )
}

export default DetailView