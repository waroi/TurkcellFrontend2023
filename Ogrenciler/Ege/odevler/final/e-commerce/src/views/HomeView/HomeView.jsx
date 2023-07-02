import KnowledgeList from "../../components/KnowledgeList/KnowledgeList"
import Sellers from "../../components/Sellers/Sellers"
import { useState, useEffect } from "react"
import axios from "axios"
import HomeProducts from "../../components/HomeProducts/HomeProducts"
import PromotionProducts from "../../components/PromotionProducts/PromotionProducts"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import UpperBanner from "../../components/HomeUpperBanner/UpperBanner"
import LowerBanner from "../../components/HomeLowerBanner/LowerBanner"
const HomeView = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => setProducts(response.data))

    }, [])


    return (
        <div>
            <HeroBanner />
            <HomeProducts products={products} />
            <UpperBanner />
            <PromotionProducts products={products} />
            <Sellers />
            <LowerBanner />
            <KnowledgeList />


        </div>
    )
}

export default HomeView