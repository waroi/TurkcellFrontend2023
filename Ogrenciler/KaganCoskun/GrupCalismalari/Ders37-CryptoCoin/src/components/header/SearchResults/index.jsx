/* eslint-disable react/prop-types */
import { useTheme } from "../../../context/ThemeContext";
import { SeacrhResultWrap, SearchResultItem } from "./styled"

const SearchResults = ({filterList}) => {
  const { theme } = useTheme();
  return (
    <SeacrhResultWrap theme={theme}>
        {filterList?.slice(0,5)?.map((item=><SearchResultItem  key={item.id} to={`/coin/${item.id}`}><h6>{item.name} {item.symbol.toUpperCase()}</h6> <h6>#{item.market_cap_rank}</h6></SearchResultItem>))}
    </SeacrhResultWrap>
  )
}

export default SearchResults