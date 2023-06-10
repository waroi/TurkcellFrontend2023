export const getAllCoins = async ( ) => {
  try {
    const res = await fetch("https://api.coinstats.app/public/v1/coins?skip=0");
    const allCoinData = await res.json();
    return allCoinData;
  } catch (err) {
    return console.log(err);
  }
};
