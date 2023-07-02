import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { setSelectedProduct } from '../../redux/slices/OneProduct';
import { getProducts } from '../../util/Request';
import { setList } from '../../redux/slices/Product';
import Card from '../../components/Card/Card';
import { Button } from '../../components/Navbar/navbarStyle';
import { addToBasket, updateQuantity } from '../../redux/slices/Basket';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const selectedProductId = parseInt(id);
  const products = useSelector((state) => state.product.products);
  const basketItems = useSelector((state) => state.basket.basketItems);
  const productDetail = products.find((element) => element.id === selectedProductId);
  const dispatch = useDispatch();

  const handleAddToBasket = async (product) => {
    const existingItem = basketItems.find(item => item.id === product.id);
    console.log(basketItems)
    if (existingItem) {
      const response = await fetch(`http://localhost:3000/basketItems/${product.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: existingItem.quantity + 1 }),
      });

      if (response.ok) {
        dispatch(updateQuantity({ id: product.id, quantity: existingItem.quantity + 1 }));
        toast.success('Quantity güncellendi.');
      } else {
        toast.error('Quantity güncelleme başarısız!');
      }
    } else {
      dispatch(addToBasket({ ...product, quantity: 1 }));
      const response = await fetch('http://localhost:3000/basketItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...product, quantity: 1 }),
      });
      if (response.ok) {
        toast.success('Urun sepete eklendi.');
      } else {
        toast.error('Urun ekleme basarisiz!');
      }
    }
  };

  let randomArr = [];

  for (let i = 0; i < 8; i++) {
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
        <img width="500px" src={productDetail.image} alt="" />
        <div>
          <h2>{productDetail.title}</h2>
          <h5>{productDetail.category}</h5>
          <p>{productDetail.description}</p>
          <p>{productDetail.rating.rate}</p>
          <h2>{productDetail.price}</h2>
          <Link to={`/basket`}><Button onClick={() => handleAddToBasket(productDetail)}>Add to Basket</Button></Link>
        </div>
      </div>
      <div className='d-flex flex-wrap'>
        {randomArr.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductDetail