import React from 'react'
import { useParams } from 'react-router-dom'

const CoinDetail = () => {
    const { id } = useParams()
    return (
        <div>

            CoinDetail {id}</div>
    )
}

export default CoinDetail