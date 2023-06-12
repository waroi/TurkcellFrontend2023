/* eslint-disable react/prop-types */
import CurrencyInfo from "./CurrencyInfo"
import { CurrencyContainer } from "./currencyStyled"


const Currency = ({currency}) => {
  return (
    <CurrencyContainer>
      <CurrencyInfo currency={currency.EUR}/>
      <CurrencyInfo currency={currency.USD}/>
      <CurrencyInfo currency={currency.GBP}/>
    </CurrencyContainer>
  )
}

export default Currency