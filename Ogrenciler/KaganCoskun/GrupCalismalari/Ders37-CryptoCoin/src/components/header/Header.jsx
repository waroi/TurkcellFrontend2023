import { useTheme } from "../../context/ThemeContext";
import { HeaderWrapper, OptionItem, SelectItem,Icon } from "./styled";
import { useCurrency } from "../../context/CurrencyContext";
import { getCurrencies } from "../../service/requests";
import { useEffect, useState } from "react";

const Header = () => {
  const [currencyList, setCurrencyList] = useState([]);

  const { theme, setTheme } = useTheme();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    getCurrencies().then((data) => setCurrencyList(data));
  }, []);

  return (
    <HeaderWrapper theme={theme}>
      <h1>Crypto Koyun</h1>
      <SelectItem theme={theme} onChange={(e) => setCurrency(e.target.value)}>
        <option value={currency}>{currency.toUpperCase()}</option>
        {currencyList?.length > 0 &&
          currencyList?.map((item) => (
            <OptionItem key={item} value={item}>
              {item.toUpperCase()}
            </OptionItem>      
          ))}
           
      </SelectItem>
     
        <Icon
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={
            `${theme}` === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
          }
        />  
    </HeaderWrapper>
  );
};

export default Header;
