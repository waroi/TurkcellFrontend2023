import { useTheme } from "../../context/ThemeContext"
import { HeaderWrapper } from './styled'
import { useCurrency } from "../../context/CurrencyContext"
import { getCurrencies } from "../../service/requests"
import { useEffect, useState } from "react"

const Header = () => {

  const [currencyList, setCurrencyList] = useState([])

    const {theme, setTheme} = useTheme()
    const {currency, setCurrency} = useCurrency()


    useEffect(() => {
        getCurrencies().then((data)=>setCurrencyList(data))
    }, [])


  return (
    <HeaderWrapper theme={theme}>
        <h1>Crypto Coin</h1>
        <select onChange={(e)=>setCurrency(e.target.value)}>
          <option value={currency}>{currency.toUpperCase()}</option>
            {currencyList?.length>0 && currencyList?.map((item)=><option key={item} value={item}>{item.toUpperCase()}</option>)}
        </select>

        <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>Change Theme</button>
    </HeaderWrapper>
  )
}

export default Header