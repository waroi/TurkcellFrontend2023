import { useParams } from "react-router-dom";
import { useCoinList } from "../context/CoinContext";
import { Top, Bottom, SpanItem, DetailWrapper, Table, TDimension, TRow, Rank,Image,Paragraph,Span,Header2} from "./detailStyled";
import { useCurrency } from "../context/CurrencyContext";
import { useTheme } from "../context/ThemeContext";
import TableItem from "../components/TableItem/TableItem";

const DetailView = () => {
  const { id } = useParams();
  const { coinList } = useCoinList();
  const { currency } = useCurrency();
  const {theme} = useTheme()
  console.log(" out detail coinList : ", coinList);

  const newCoin = coinList.find((element) => element.id === id);

  return (
    <DetailWrapper>
      <Rank theme={theme}>Rank #{newCoin?.market_cap_rank}</Rank>
      <Top>
        <Image
          src={newCoin?.image}
          alt="image"
        />
        <Paragraph theme={theme}>
          {" "}
          {newCoin?.name}{" "}
          <Span
          >
            {newCoin?.symbol.toUpperCase()}
          </Span>{" "}
        </Paragraph>
      </Top>
      <Bottom>
        <Header2 theme={theme}>{currency.toUpperCase() + " " + newCoin?.current_price}</Header2>
        <SpanItem price={newCoin?.price_change_24h}>
          {newCoin?.price_change_percentage_24h.toFixed(1)}%
        </SpanItem>
      </Bottom>
<Table>
  <tbody >
    <TableItem text="Piyasa Degeri" value={newCoin?.market_cap}/>
    <TableItem text="Total Supply" value={newCoin?.total_supply}/>
    <TableItem text="Total volume" value={newCoin?.total_volume}/>
    <TableItem text="Circulating Supply" value={newCoin?.circulating_supply}/>
    <TableItem text="Fully Diluted Valuation" value={newCoin?.fully_diluted_valuation}/>
  </tbody>
</Table>
    </DetailWrapper>
  );
};

export default DetailView;
