import { useParams } from "react-router-dom";
import { useCoinList } from "../context/CoinContext";
import { Top, Bottom, SpanItem, DetailWrapper, Table, Rank,Image,Paragraph,Span,Header2} from "./detailStyled";
import { useCurrency } from "../context/CurrencyContext";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { getCoinChart } from "../service/requests";
import TableItem from "../components/TableItem/TableItem";
import CoinChart from "../components/Home/CoinChart";

const DetailView = () => {
  const { id } = useParams();
  const { coinList } = useCoinList();
  const { currency } = useCurrency();
  const {theme} = useTheme()


  const [coinChart, setCoinChart] = useState()
  const [chartDay,setChartDay] = useState(1)

  const newCoin = coinList.find((element) => element.id === id);



  useEffect(() => {
    getCoinChart(id,currency,chartDay).then((data)=>setCoinChart(data))
  },[id,currency,chartDay])

  return (
    <DetailWrapper>
      <Rank theme={theme}>Rank #{newCoin?.market_cap_rank}</Rank>
      <Top>
        <Image
          src={newCoin?.image}
          alt="image"
        />
        <Paragraph theme={theme}>
          {newCoin?.name}
          <Span>
             {" "}{newCoin?.symbol.toUpperCase()}
          </Span>
        </Paragraph>
      </Top>
      <Bottom>
        <Header2 theme={theme}>{currency.toUpperCase() + " " + newCoin?.current_price.toLocaleString()}</Header2>
        <SpanItem price={newCoin?.price_change_24h}>
          {newCoin?.price_change_percentage_24h.toFixed(1)}%
        </SpanItem>
      </Bottom>
      <Table>
        <tbody >
          <TableItem text="Piyasa Degeri" value={newCoin?.market_cap.toLocaleString()}/>
          <TableItem text="Total Supply" value={newCoin?.total_supply.toLocaleString()}/>
          <TableItem text="Total volume" value={newCoin?.total_volume.toLocaleString()}/>
          <TableItem text="Circulating Supply" value={newCoin?.circulating_supply.toLocaleString()}/>
          <TableItem text="Fully Diluted Valuation" value={newCoin?.fully_diluted_valuation.toLocaleString()}/>
        </tbody>
      </Table>
      {coinChart?.length>0&&chartDay &&<CoinChart data={coinChart} chartDay={chartDay} setChartDay={setChartDay}/>}
    </DetailWrapper>
  );
};

export default DetailView;
