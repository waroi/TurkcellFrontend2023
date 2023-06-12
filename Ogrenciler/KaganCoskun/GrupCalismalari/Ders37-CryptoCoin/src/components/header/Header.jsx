import { useTheme } from "../../context/ThemeContext";
import {
  HeaderWrapper,
  OptionItem,
  SelectItem,
  Icon,
  Container,
  SearchInput,
  Logo,
} from "./styled";
import { useCurrency } from "../../context/CurrencyContext";
import { getCurrencies } from "../../service/requests";
import { useEffect, useState } from "react";
import { useCoinList } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import LogoDark from "/public/kriptok-dark.png"
import LogoLight from "/public/kriptok-light.png"
import SearchResults from "./SearchResults";

const Header = () => {
  const [currencyList, setCurrencyList] = useState([]);

  const { theme, setTheme } = useTheme();
  const { currency, setCurrency } = useCurrency();
  const[filterList, setFilterList] = useState();
  const[filterFocus, setFilterFocus] = useState(false);

  const { coinList } = useCoinList();

  useEffect(() => {
    getCurrencies().then((data) => setCurrencyList(data));
  }, []);

  const handeleSearch = (e) => {
    let filter = [...coinList].filter((item) => {
      if(e.target.value === "" || e.target.value === null) return [];
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilterList(filter);


  };

  return (
    <HeaderWrapper theme={theme}>
      <Container>
        <Link to={"/"}><Logo src={theme === "light" ? LogoLight : LogoDark} alt="logo" /></Link>

        <SearchInput
          type="text"
          placeholder="Search"
          onChange={handeleSearch}
          theme={theme}
          onFocus={() => setFilterFocus(true)}
          onBlur={() => setTimeout(() => setFilterFocus(false), 200)}
        />
        {filterFocus && filterList?.length > 0 && <SearchResults filterList={filterList}/>}

        <div>
          <SelectItem
            theme={theme}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value={currency}>{currency.toUpperCase()}</option>
            {currencyList?.length > 0 &&
              currencyList?.map((item) => (
                <OptionItem key={item} value={item}>
                  {item.toUpperCase()}
                </OptionItem>
              ))}
          </SelectItem>
          <Icon
            theme={theme}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={
              `${theme}` === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
            }
          />
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
