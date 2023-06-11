import { useParams } from 'react-router-dom'
import { useCoin } from '../../context/Coincontext'
import Detail from './Detail'
const CoinDetail = () => {
    const { allCoins } = useCoin()
    const { id } = useParams()
    const foundCoin = allCoins.coins?.find(item => item.id == id)
    // console.log(allCoins.coins?.find(item => item.id == id))

    return (
        <div>
            {
                foundCoin && <Detail foundCoin ={foundCoin} /> || <p>Loading</p>
            }
            

        </div>
    )
}

export default CoinDetail