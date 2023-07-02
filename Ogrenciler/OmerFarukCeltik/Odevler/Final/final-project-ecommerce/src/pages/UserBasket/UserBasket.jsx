import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCardData } from '../../redux/helpers';
import {  deleteAllCard, getCard } from '../../redux/slices/cardSlice';
import { ToastContainer,toast } from 'react-toastify';
import ProductListItem from './ProductListItem/ProductListItem';
import { completeBuyProductSide } from '../../redux/slices/productSlice';
const UserBasket = () => {
  const dispatch = useDispatch();
  const [basket, setBasket] = useState([]);
  const [alertState, setAlertState] = useState(null)
  const stockAlert = useSelector((state) => state.products).buyAlert
  const currentUser =  useSelector((state) => state.users).currentlyLoggedIn
  useEffect(() => {
    async function fetchData() {
      const newData = await getCardData();
      await dispatch(getCard(newData));
      const findUserBasket = await newData?.find((item) => item.id == currentUser.id)
      await setBasket(findUserBasket)
      await setAlertState(stockAlert)
    }
    fetchData();
  }, [dispatch]);
  async function DeleteAllCard(){
    await dispatch(deleteAllCard(currentUser.id));
    toast.error("All Products Deleted", {
      autoClose: 2000,
    });
    setBasket([])
  }
  
  async function CompleteCardBuy(){
    await stockAlert;
    basket.usercard && basket.usercard.length > 0 ? await dispatch(completeBuyProductSide(basket.usercard)) : toast.error("Buy actions can not be completed",{
    autoClose:2000
   })

   if(await alertState == false && await stockAlert == false){
     await dispatch(deleteAllCard(currentUser.id));
     await setBasket([]);

     basket.usercard.length != 0 && await stockAlert == false && await alertState == false ? toast.success("Pending", {
       autoClose: 2000,
     }) : toast.error("Stocks are changed!Your products could be out of stock!", {
      autoClose: 2000,
    });
    }else if(await alertState == true && await stockAlert == true){  

     await stockAlert == true && toast.error("Stocks are changed!Your products could be out of stock!", {
        autoClose: 2000,
      });

   }
  }
  return (
    <div className=" position-relative">
      <ToastContainer />
      <div className="container">
        <div className='d-flex flex-column'>
          <div className="col-12">
            <h3 className='h3 mb-4 mt-120 pt-5 text-primary fw-semibold'>{currentUser.username}'s Products</h3>
          </div>
          { stockAlert == true && <div className='text-danger'>Stocks are changed, Your product could be stock's out. Please reload the page!</div>}
          {

           basket?.usercard && basket?.usercard.length > 0 ? basket?.usercard.map((item) => (
             
               <ProductListItem key={item.itemid}  item={item} />
             
            )) : <div className='mb-120 pb-120'>Your card is empty</div>
          }
          <div className='my-5 d-flex justify-content-end'>
            <button onClick={() => DeleteAllCard()} className='btn btn-danger fs-5 py-075 px-175 text-white me-2 rounded-pill'>Delete All</button>
            <button disabled={stockAlert} onClick={() => CompleteCardBuy()} className='btn btn-primary fs-5 py-075 px-175 rounded-pill'>Complete Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBasket