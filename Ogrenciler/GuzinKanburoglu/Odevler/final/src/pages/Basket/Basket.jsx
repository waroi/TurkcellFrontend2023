import React, { useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { removeFromBasket, setBasket, updateQuantity } from "../../redux/slices/Basket";
import { getBasket } from "../../util/Request";
import { ToastContainer, toast } from "react-toastify";

const BasketPage = () => {
    let basketItems = useSelector((state) =>state.basket.basketItems);
    const dispatch = useDispatch();

    useEffect(() => {
        getBasket().then((data) => dispatch(setBasket(data)));
    }, [dispatch]);

    const handleRemoveFromBasket = async (productId) => {
        const response = await fetch(`http://localhost:3000/basketItems/${productId}`, {
            method: 'DELETE',
          });       
          if (response.ok) {
            dispatch(removeFromBasket(productId));
            toast.success('Ürün sepetten silindi.');
          } else {
            toast.error('Ürün silme başarısız!');
          }
      };

      const handleQuantityChange = async (productId, newQuantity) => {
        const response = await fetch(`http://localhost:3000/basketItems/${productId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: newQuantity }), 
        });
      
        if (response.ok) {
          dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
          toast.success('Quantity güncellendi.');
        } else {
          toast.error('Quantity güncelleme başarısız!');
        }
      };
    return (
        <div>
      <h1>Basket</h1>
      <ToastContainer />
      <ul>
        {basketItems.map((item) => (
          <li key={item.id}>
            {item.title} — {item.price} — Quantity: {item.quantity}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemoveFromBasket(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default BasketPage;