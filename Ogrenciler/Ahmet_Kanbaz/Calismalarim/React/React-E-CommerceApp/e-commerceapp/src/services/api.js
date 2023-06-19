import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://sephora.p.rapidapi.com/products/v2/detail',
  params: {
    id: '730',
  },
  headers: {
    'X-RapidAPI-Key': 'a00042e7e2msh577d9c138893f2dp1a3eaajsned4e60a07f10',
    'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
  }
};

export const getAllProducts4API = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}