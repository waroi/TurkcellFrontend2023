export const sortProducts=(allProducts,sortType)=>{
    const sorted = [...allProducts].sort((a,b)=>{
        if(sortType==="chp") return a.price-b.price
        if(sortType==="exp") return b.price-a.price
        if(sortType==="a-z") return a.title.localeCompare(b.title)
        if(sortType==="z-a") return b.title.localeCompare(a.title)
        if(sortType==="rt5") return b.rating.rate-a.rating.rate
        if(sortType==="rt1") return a.rating.rate-b.rating.rate
    })
    return sorted
}
