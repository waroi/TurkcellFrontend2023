import { useRef } from "react"
import { useThemeStore } from "../context/themeStore"
import { useStore } from "../context/store"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const { setTheme, theme } = useThemeStore()
  const { setSearch, top100, marketCap } = useStore()
  const handleForm = (e) => {
    e.preventDefault()
    setSearch(searchRef.current.value)
    navigate(`/${searchRef.current.value}`)
    searchRef.current.value = ""
  }

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light")
    localStorage.setItem("theme", theme == "light" ? "dark" : "light")
  }

  const StyledHeader = styled.header`
 div{

  z-index:1;
  box-shadow: 0 0 1em 0 ${props => props.theme == "light" ? "#00000075" : "#ffffff78"};
  border-bottom: 1px solid ${props => props.theme == "light" ? "#00000075" : "#ffffff78"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  
  h1{
   display: flex;
   align-items: center;

   small{
    font-size: .5em;
    font-weight: bolder;
   }

  }
  .themeButton{
   cursor: pointer;
   width: 1.5rem;
   height: 1.5rem;
   border-radius: 50%;
   background-color: ${props => props.theme == "light" ? "#000" : "#fff"};
  }

 }
 `
  const Form = styled.form`
   padding: 3em;
  display: flex;
  justify-content: center;
  
  input{
   width: 35%;
   padding: 1em;
   border: none;
   border-radius: 1em;
   background-color: ${props => props.theme == "light" ? "#fff" : "#000"};
   color: ${props => props.theme == "light" ? "#000" : "#fff"};
   outline: none;
   box-shadow: 0 0 .5em 0 ${props => props.theme == "light" ? "#00000075" : "#ffffff78"};
   border: 1px solid ${props => props.theme == "light" ? "#6e6e6e" : "#cfcfcff"};
}
`
  return (
    <StyledHeader theme={theme}>
      <div>
        <Link to="/">
          <h1>
            O
            <small>m</small>
            O
          </h1>
        </Link>
        <span>
          Cryptos: {top100.length}
        </span>
        <span>
          Market Cap: {marketCap.toFixed(2)}
        </span>
        <span>
          24H Vol: {top100.reduce((acc, cur) => acc + Number(cur.volume), 0).toFixed(2)}
        </span>
        <span>
          Dominance: BTC: {marketCap && (top100[0].marketCap / marketCap * 100).toFixed(2)}% ETH: {marketCap && (top100[1].marketCap / marketCap * 100).toFixed(2)}%
        </span>
        <span className="themeButton" onClick={handleTheme}>
        </span>
      </div>

      <Form theme={theme} onSubmit={handleForm}>
        <input ref={searchRef} type="search" placeholder="Search Coin.." name="search" />
      </Form>

    </StyledHeader>
  )
}

Header.propTypes = {
  theme: PropTypes.string,
}



export default Header