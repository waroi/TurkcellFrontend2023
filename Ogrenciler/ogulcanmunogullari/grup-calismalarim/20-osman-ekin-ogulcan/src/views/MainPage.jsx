
import { useStore } from "../context/store"
import { useThemeStore } from "../context/themeStore"
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainPage = () => {
 const navigate = useNavigate()
 const { theme } = useThemeStore()
 const { top100 } = useStore()

 const MainContainer = styled.div`
 padding: 1em;
 `
 const Grid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: .5fr 4fr 2fr 1fr 1fr 1fr 2fr 2fr;
  border-bottom: 1px solid ${props => props.theme == "light" ? "#00000075" : "#ffffff78"};
  div{
   display: flex;
   gap: .5em;
   text-align: left;
   padding: 1.5em 0;
  }
  cursor: pointer;
  &:first-child{
   cursor: default;
  }
  &:not(:first-child):hover{
   background-color: ${props => props.theme == "light" ? "#4d537235" : "#46464635"};
  }
  .symbol{
   font-weight: bolder;
   color: ${props => props.theme == "light" ? "#00000050" : "#ffffff50"};
  }
  .icon{
   width: 1em;
   height: 1em;
   overflow: hidden;
   img{
    width: 100%;
   }
  }
 `
 const CalculateColor = styled.div`
 font-weight: 600;
  color: ${props => props.number > 0 ? "#16c784" : "#ea3943"};
 `
 const Loading = styled.div`
  text-align: center;
  padding: 1em;
  color: ${props => props.theme == "light" ? "#000000" : "#ffffff"};
 `

 return (
  <MainContainer>
   <Grid theme={theme}>
    <div>#</div>
    <div>Name</div>
    <div>Price</div>
    <div>1h</div>
    <div>24h</div>
    <div>7d</div>
    <div>Market Cap</div>
    <div>Volume(24h)</div>
   </Grid>
   {
    top100.length == 0 && <Loading theme={theme}>Loading...</Loading>
   }
   {top100.map((coin) => {
    return <Grid onClick={() => navigate(`/${coin.id}`)} key={coin.rank} theme={theme}>
     <div>{coin.rank}</div>
     <div> <span className="icon"><img src={coin.icon} /></span> {coin.name} <span className="symbol">{coin.symbol}</span></div>
     <div>{coin.price.toFixed(6)}</div>
     <CalculateColor number={coin.priceChange1h} >{coin.priceChange1h}</CalculateColor>
     <CalculateColor number={coin.priceChange1d} >{coin.priceChange1d}</CalculateColor>
     <CalculateColor number={coin.priceChange1w} >{coin.priceChange1w}</CalculateColor>
     <div>{coin.marketCap.toFixed(2)}</div>
     <div>{coin.volume.toFixed(2)}</div>
    </Grid>
   })}

  </MainContainer>
 )
}

MainPage.propTypes = {
 theme: PropTypes.string,
 number: PropTypes.number,
 top100: PropTypes.array,
}



export default MainPage