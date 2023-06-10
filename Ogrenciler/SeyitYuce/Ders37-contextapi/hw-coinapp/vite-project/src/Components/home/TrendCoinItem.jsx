import React from 'react'

const TrendCoinItem = ({ coin }) => {
    return (
        <li className='d-flex  align-items-center border coinList'>
            <img src={`${coin.icon}`} alt="" className='trend-img' />
            <span className='trend-symbol '>{coin.symbol}</span>
            <div className='trend-name'>{coin.name}</div>
            <div className='trend-price'>${Math.round(coin.price * 1000) / 1000}</div>
        </li>
    )
}

export default TrendCoinItem