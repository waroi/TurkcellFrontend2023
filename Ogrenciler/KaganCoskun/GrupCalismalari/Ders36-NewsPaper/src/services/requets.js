export async function getNews(category,page,country){
    const data = await fetch(`${import.meta.env.VITE_NEWS_API_URI}?country=${country}&tag=${category}&paging=${page}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `apikey ${import.meta.env.VITE_API_KEY}`
        }
    })
    const news = await data.json()
    return news

}

export async function getNewsDetail(id,page,category,country){
    const newsPage =await getNews(category,page,country)
    const news = newsPage?.result?.find((news)=>news.key===id)
    return news
}

export async function getAllCurrency(){
    const data = await fetch(`${import.meta.env.VITE_CURRENCY_API_URI}/allCurrency `,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `apikey ${import.meta.env.VITE_API_KEY}`
        }
    })
    const currency = await data.json()
    console.log(currency)
    return currency

}
