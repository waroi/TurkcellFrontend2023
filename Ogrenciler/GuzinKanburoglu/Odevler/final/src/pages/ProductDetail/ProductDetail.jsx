import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { setSelectedProduct } from '../../redux/slices/OneProduct';
import { getProducts } from '../../util/Request';
import { setList } from '../../redux/slices/Product';
import Card from '../../components/Card/Card';

const ProductDetail = () => {
    const { id } = useParams();
    const selectedProductId = parseInt(id);
    const products = useSelector((state) => state.product.products);
    const productDetail = products.find((element) => element.id === selectedProductId);
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

//   if (!isLoggedIn) {
//     navigate('/login'); // Kullanıcı oturum açmamışsa, giriş sayfasına yönlendirin.
//     return null; // Render işlemine devam etmeyin.
//   }
   
        let randomArr = [];

        for (let i = 0; i < 4; i++) {
            let random = Math.floor(Math.random() * 20);
            let product = products[random];
            randomArr.push(product);
        }

    useEffect(() => {
        getProducts().then((data) => dispatch(setList(data)));
        dispatch(setSelectedProduct(selectedProductId))   
    }, [dispatch, selectedProductId])

    if (!productDetail)
        return <div>No product found!</div>

   

return (
    <div>
        <div className='d-flex'>
            <img src={productDetail.image} alt="" />
            <div>
                <h2>{productDetail.title}</h2>
                <h5>{productDetail.category}</h5>
                <p>{productDetail.description}</p>
                <p>{productDetail.rating.rate}</p>
                <h2>{productDetail.price}</h2>
            </div>
        </div>
        <div className='d-flex flex-wrap'>
        {randomArr.map((product)=>(
                    <Card product={product}/>
                ))}
        </div>
    </div>
)
}

export default ProductDetail