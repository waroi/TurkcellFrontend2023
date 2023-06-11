import React from 'react'
import { useParams } from 'react-router-dom'
import { useCoin } from '../../context/Coincontext'
const CoinDetail = () => {
    const { allCoins } = useCoin()
    const { id } = useParams()
    const foundCoin = allCoins.coins?.find(item => item.id == id)
    console.log(allCoins.coins?.find(item => item.id == id))

    return (
        <div>
            {
                foundCoin && <h1>{foundCoin.name} {foundCoin.marketCap}</h1> || <p>Loading</p>
            }
            CoinDetail {id}

        </div>
    )
}

export default CoinDetail