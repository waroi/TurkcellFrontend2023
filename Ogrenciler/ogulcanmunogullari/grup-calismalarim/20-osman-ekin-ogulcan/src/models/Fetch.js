import axios from 'axios';
class Fetch {
 static async getTop() {
  const response = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD");
  return response.data.coins;
 }
 static async getCoin(id) {
  const response = await axios.get(`https://api.coinstats.app/public/v1/coins/${id}?currency=USD`);
  return response.data.coin;

 }
 static async getHistory(id) {
  const response = await axios.get(`https://api.coinstats.app/public/v1/charts?period=1w&coinId=${id}&currency=USD`);
  const data = response.data.chart.slice(0, 24);
  return data;



 }
}
export default Fetch;