import axios from "axios";
class Fetch {
  static async getNews(lang, page) {

    const data = await axios(`https://api.collectapi.com/news/getNews?country=${lang}&paging=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': import.meta.env.VITE_API_KEY
      }
    })
    const RESULT = await data.data.result
    return RESULT
  }
}
export default Fetch;

