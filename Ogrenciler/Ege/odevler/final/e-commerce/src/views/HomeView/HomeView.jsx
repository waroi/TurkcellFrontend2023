import KnowledgeList from "../../components/KnowledgeList/KnowledgeList"
import Sellers from "../../components/Sellers/Sellers"
import { useState, useEffect } from "react"
import axios from "axios"
import HomeProducts from "../../components/HomeProducts/HomeProducts"

const HomeView = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => setProducts(response.data))

    }, [])


    return (
        <div>
            <h1>HomeView</h1>
            <HomeProducts products={products} />
            <Sellers />
            <KnowledgeList />


        </div>
    )
}

export default HomeView