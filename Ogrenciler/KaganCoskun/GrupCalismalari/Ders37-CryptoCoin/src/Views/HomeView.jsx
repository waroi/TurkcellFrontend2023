import CoinListItem from "../components/Home/CoinListItem"
import { useCoinList } from "../context/CoinContext"
import { Table } from "./homeStyled"

const HomeView = () => {

    const{coinList} = useCoinList()

    console.log(coinList)

  return (
    <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        {coinList?.length>0 && coinList?.map((item)=><CoinListItem key={item.id} coin={item}/>)}
        </tbody>
    </Table>
  )
}

export default HomeView