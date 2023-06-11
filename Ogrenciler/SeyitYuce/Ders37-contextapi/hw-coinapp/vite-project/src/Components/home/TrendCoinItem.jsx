import React from 'react'
import { Link } from 'react-router-dom'

const TrendCoinItem = ({ coin }) => {
    return (
        <Link to={`/detail/${coin.id}`} className='d-flex  align-items-center border coinList'>
            <img src={`${coin.icon}`} alt="" className='trend-img' />
            <span className='trend-symbol '>{coin.symbol}</span>
            <div className='trend-name'>{coin.name}</div>
            <div className='trend-price'>${Math.round(coin.price * 1000) / 1000}</div>
        </Link>
    )
}

export default TrendCoinItem