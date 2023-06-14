import React from 'react'
import { Link } from 'react-router-dom'
import  Help  from "../../helpers/Help"

const TrendCoinItem = ({ coin }) => {
    return (
        <Link to={`/detail/${coin.id}`} className='d-flex  align-items-center border  coinList'>
            <img src={`${coin.icon}`} alt="" className='trend-img' />
            
            <div className='d-flex flex-column text-start ms-3'>
                <div className='fw-semibold'>{coin.name}</div>
                <div className='trend-price'>${Help(coin.price)}</div>
            </div>
        </Link>
    )
}

export default TrendCoinItem