import "./App.css";
import { useTheme } from "./context/ThemeContext";
import Button from "./components/Button.jsx";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <h1>Context API</h1>
      <Button />
    </div>
  );
}
//coinmarket
//https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest
//sayfanın aynısını yap , grafik yapabilirsen yap ,fiyat bilgisi gelsin ,tradingview kullanabilirsin,widgetdeğişkenleri
export default App;
