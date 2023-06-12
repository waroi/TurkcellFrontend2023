import { useParams } from 'react-router-dom'
import { useCoin } from '../../context/Coincontext'
import Detail from './Detail'
const CoinDetail = () => {
    const { allCoins } = useCoin()
    const { id } = useParams()
    const foundCoin = allCoins.coins?.find(item => item.id == id)

    return (
        <div className='detail-height'>
            {
                foundCoin && <Detail foundCoin ={foundCoin} /> || <p className='news-height'>Loading</p>
            }
            

        </div>
    )
}

export default CoinDetail