import { BottomContainer, BottomHeader, CategoryArea, CustomButton, CustomButton2, CustomOption, CustomSelect, LogoImg, LogoWrapper, SearchArea, SettingsArea, TextArea, UpperContainer, UpperHeader } from './styled'
import {BsSunFill} from 'react-icons/bs'
import {MdDiamond} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {BsCheckCircleFill} from 'react-icons/bs'
import logo from '../../../public/logo.svg'
import { useTheme } from '../../context/ThemeContext'
const Header = () => {
  const {theme,setTheme} = useTheme();
  return (
    <>
    <UpperHeader props={theme}>
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
          <CustomSelect>
            <CustomOption defaultValue="English">English</CustomOption>
            <CustomOption>Turkish</CustomOption>
          </CustomSelect>
          <CustomSelect>
            <CustomOption defaultValue="USD">USD</CustomOption>
          </CustomSelect>
          <BsSunFill style={theme == "light" ? {color: "#0d1421"} : {color:"white"}} onClick={() => setTheme(theme == "light" ? "dark" : "light")}/>
          <span>|</span>
          <MdDiamond />
          <CustomButton>Log In</CustomButton>
          <CustomButton2>Sign Up</CustomButton2>
        </SettingsArea>
      </UpperContainer>
      </UpperHeader>
      <BottomHeader>
      <BottomContainer>
      <LogoWrapper>
            <Link to="/">
              <LogoImg src={logo} alt="logo" />
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
          <input placeholder='Search'></input>
        </SearchArea>
      </BottomContainer>
      </BottomHeader>
      </>
  )
}

export default Header