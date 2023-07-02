import React from 'react';
import Nav from '../../components/navbar/nav' ;

const Cart = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>Sepetiniz boş.</p>;
  }
  return (
  <>
    <Nav />
    <div>
      <h2>Sepet</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Ürün Adı: {product.title}</p>
            <p>Fiyat: ${product.price}</p>
            <p>Adet: {product.quantity}</p>
            <p>Toplam Fiyat: ${product.price * product.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default Cart;