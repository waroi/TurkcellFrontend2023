import KnowledgeList from "../../components/KnowledgeList/KnowledgeList"
import Sellers from "../../components/Sellers/Sellers"
import { useState, useEffect } from "react"
import axios from "axios"
import HomeProducts from "../../components/HomeProducts/HomeProducts"
import PromotionProducts from "../../components/PromotionProducts/PromotionProducts"
import Banner from "../../components/Banner/Banner"
import imageOne from "../../assets/Woman_Holds_Dog.png"
import imageTwo from "../../assets/Adoption_Banner.png"
const HomeView = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => setProducts(response.data))

    }, [])

    const bannerTitleOne = "One More Product"
    const bannerSubTitleOne = "Thousands More Fun!"
    const bannerTextOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque soluta eveniet architecto minima. Officiis fuga omnis voluptas doloribus temporibus."
    const bannerImageOne = "../../assets/Woman_Holds_Dog.png"

    const bannerTitleTwo = "Shopping"
    const bannerSubTitleTwo = "We Sell Products"
    const bannerTextTwo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo velit reprehenderit facere similique vitae sint sit nemo fuga architecto!"
    const bannerImageTwo = "../../assets/Woman_Holds_Dog.png"

    return (
        <div>
            <h1>HomeView</h1>
            <HomeProducts products={products} />
            <Banner img={bannerImageOne} title={bannerTitleOne} subtitle={bannerSubTitleOne} text={bannerTextOne} imgOnLeft={true} />
            <PromotionProducts products={products} />
            <Sellers />
            <Banner img={bannerImageTwo} title={bannerTitleTwo} subtitle={bannerSubTitleTwo} text={bannerTextTwo} imgOnLeft={false} />
            <KnowledgeList />


        </div>
    )
}

export default HomeView