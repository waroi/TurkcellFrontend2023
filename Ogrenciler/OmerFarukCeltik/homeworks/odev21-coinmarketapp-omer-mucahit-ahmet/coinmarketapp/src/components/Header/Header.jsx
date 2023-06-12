import { BottomContainer, BottomHeader, CategoryArea, CustomButton, CustomButton2, CustomOption, CustomSelect, LogoImg, LogoWrapper, SearchArea, SettingsArea, TextArea, UpperContainer, UpperHeader } from './styled'
import {BsSunFill} from 'react-icons/bs'
import {MdDiamond} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {BsCheckCircleFill} from 'react-icons/bs'
import { useTheme } from '../../context/ThemeContext'
const Header = () => {
  const {theme,setTheme} = useTheme();
  return (
    <>
    <UpperHeader style={theme == "light" ?  {backgroundColor:"white"} :  {backgroundColor: "#0d1421"}}>
      <UpperContainer>
        <TextArea>
          <p>Cryptos: <span>25.636</span></p>
          <p>Exchanges: <span>641</span></p>
          <p>Market Cap: <span>$1,041,776,394,705</span></p>
          <p>24h Vol: <span>$48,462,676,520</span></p>
          <p>Dominance: <span>BTC: 47.7% ETH: 20.1%</span></p>
          <p>ETH Gas: <span>17 Gwei</span></p>
        </TextArea>
        <SettingsArea>
          <CustomSelect style={theme == "light" ? {color: "#0d1421"} : {color:"white"}}>
            <CustomOption defaultValue="English">English</CustomOption>
            <CustomOption style={theme == "light" ? {color: "#0d1421"} : {color:"white"}}>Turkish</CustomOption>
          </CustomSelect>
          <CustomSelect style={theme == "light" ? {color: "#0d1421"} : {color:"white"}}>
            <CustomOption defaultValue="USD">USD</CustomOption>
          </CustomSelect>
          <BsSunFill style={theme == "light" ? {color: "#0d1421"} : {color:"white"}} onClick={() => setTheme(theme == "light" ? "dark" : "light")}/>
          <span style={theme == "light" ? {color: "#0d1421"} : {color:"white"}}>|</span>
          <MdDiamond  style={theme == "light" ? {color: "#0d1421"} : {color:"white"}}/>
          <CustomButton  style={theme == "light" ? {color: "#0d1421"} : {color:"white"}}>Log In</CustomButton>
          <CustomButton2>Sign Up</CustomButton2>
        </SettingsArea>
      </UpperContainer>
      </UpperHeader>
      <BottomHeader style={theme == "light" ? {color: "#0d1421", backgroundColor:"white"} : {color:"white",backgroundColor:"#0d1421"}}>
      <BottomContainer>
      <LogoWrapper>
            <Link to="/">
              <LogoImg src={theme == "light" ? "https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=7934c0e" : "https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg?_=7934c0e"} alt="logo" />
            </Link>
          </LogoWrapper>
        <CategoryArea>
         <p>Cryptocurrencies</p>
         <p>Exchanges</p>
         <p>Community</p>
         <p>Products</p>
         <p>Learn</p>
        </CategoryArea>
        <SearchArea>
          <AiFillStar></AiFillStar><span>Watchlist</span>
          <BsCheckCircleFill></BsCheckCircleFill><span>Portfolio</span>
          <input style={theme == "light" ?  {backgroundColor:"#ddd"} :  {backgroundColor: "black"}} placeholder='Search'></input>
        </SearchArea>
      </BottomContainer>
      </BottomHeader>
      </>
  )
}

export default Header