

export async function getCurrencies() {
  const response = await fetch(`${import.meta.env.VITE_COINGECKO_API}/simple/supported_vs_currencies`);
  const currencies = await response.json();
  return currencies;
}

export async function getCoinList(currency) {
    const response = await fetch(`${import.meta.env.VITE_COINGECKO_API}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=tr`);
    const coinList = await response.json();
    return coinList;
}

export async function getCoinChart(id, currency,day) {
    const response = await fetch(`${import.meta.env.VITE_COINGECKO_API}/coins/${id}/market_chart?vs_currency=${currency}&days=${day}`);
    const coinList = await response.json();

    return coinList.prices;
}

export async function getTrendings(){
  const response = await fetch(`${import.meta.env.VITE_COINGECKO_API}/search/trending`);
  const trendings = await response.json();
  return trendings.coins;
}