import CoinListItem from "../components/Home/CoinListItem"
import { useCoinList } from "../context/CoinContext"
import { Table,TableHeader } from "./homeStyled"
import { useCurrency } from "../context/CurrencyContext"

const HomeView = () => {

    const{coinList} = useCoinList()
    const {currency} = useCurrency()


    console.log(coinList)



  return (
    <Table>
        <thead>
            <tr>
                <TableHeader>Rank</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Price in {currency.toUpperCase()}</TableHeader>
                <TableHeader>24h %</TableHeader>
                <TableHeader>Market Cap</TableHeader>
                <TableHeader>Volume(24h)</TableHeader>
            </tr>
        </thead>
        <tbody>
        {coinList?.length>0 && coinList?.map((item)=><CoinListItem key={item.id} coin={item}/>)}
        </tbody>
    </Table>
  )
}

export default HomeView