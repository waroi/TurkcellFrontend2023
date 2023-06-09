// const fetchData = async () => {
//   try {
//     const response = await fetch(
      
//       "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c987da6e68ca4ff681632866b4c52895"
//     );

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return [];
//   }
// };

// export default fetchData;

const fetchData = async () => {
  
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    console.log(response);
    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};

export default fetchData;
