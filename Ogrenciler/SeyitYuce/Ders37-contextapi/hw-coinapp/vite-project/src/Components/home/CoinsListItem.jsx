import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const CoinsListItem = ({ coin }) => {
    return (
        <Link to={`/detail/${coin.id}`} className='text-decoration-none text-black'>
            <li className='d-flex  align-items-center border coinList'>
                <img src={`${coin.icon}`} alt="" className='coin-img' />
                <span className='coin-symbol '>{coin.symbol}</span>
                <div className='coin-name fw-bold'>{coin.name}</div>
                <div className='coin-price'>${Math.round(coin.price * 1000) / 1000}</div>
                <div className='coin-changes'>
                    <div className='coin-1h'> 1h:{coin.priceChange1h}</div>
                    <div className='coin-1d'>1d:{coin.priceChange1d}</div>
                    <div className='coin-1w'>1w:{coin.priceChange1w}</div>
                </div>
                <div className='coin-marketCap'>${Math.round(coin.marketCap * 1000) / 1000}</div>
                {/*  <div className='coin-volume'>${Math.round(coin.volume * 1000) / 1000}</div>
                <div className='coin-availableSupply'>${Math.round(coin.availableSupply * 100) / 100000}</div> */}
            </li>
        </Link>
    )
}

export default CoinsListItem