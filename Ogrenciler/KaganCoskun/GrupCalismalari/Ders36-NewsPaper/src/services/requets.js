export async function getNews(category,page,country){

    const data = await fetch(`${import.meta.env.VITE_API_URI}?country=${country}&tag=${category}&paging=${page}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `apikey ${import.meta.env.VITE_API_KEY}`
        }
    })
    const news = await data.json()
    console.log("services=>",news)
    return news

}