import { useEffect, useState } from "react"
import { checkout, getBasketItems } from "../../services/basket"
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/Basket/BasketItem";
import Button from "../../components/Shared/Button";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setBasketCount } from "../../redux/slices/basketCountSlice";

const BasketView = () => {
  const user = useSelector((state) => state.userInfo.userInfo);
  const dispatch = useDispatch();
  const [basket, setBasket] = useState([])
  const [flag, setFlag] = useState(false)
  const [basketTotalPrice, setBasketTotalPrice] = useState(0)


  useEffect(()=>{
    getBasketItems(user?.payload?.id).then((res)=>{setBasket(res);dispatch(setBasketCount(res?.length))}).then(()=>setFlag(false))
    
  }
  ,[user,flag])

  useEffect(() => {
    const totalPrice = basket?.reduce((total, item) => {
      return total + (item?.product?.price * item?.quantity);
    }, 0);

    setBasketTotalPrice(totalPrice);
    setFlag(false)
  }
  , [basket,flag])

const order =async ()=>{

  const res =await checkout(user?.payload?.id);

  if(!res.success){
    res?.messages?.map(message => toast.error(message));
  }
  toast.success("Payment Successfuly Done")
  setBasket([])
  setFlag(true)

}

  return (
    <div>
      <ToastContainer />
      {basket?.length===0&&<h2 className="d-flex align-items-center justify-content-center py-5 my-5">Empty Basket</h2>}
      <div className="row flex-column flex-lg-row align-items-start">
        <div className="col-lg-12 col-sm-12 d-flex justify-content-center flex-column">
        {basket&&basket?.map((basketItem)=>
        <BasketItem
          key={basketItem?.product?.id} 
          setBasketTotalPrice={setBasketTotalPrice}
          basketItem={basketItem}
          basketTotalPrice={basketTotalPrice}
          setFlag={setFlag}
          />)}
        </div>
        {basket?.length>0&&<div className="position-sticky bottom-0 z-3 p-2 rounded-2 bg-white border border-5  text-center d-flex justify-content-between align-items-center" >
          <div>
            <h6>Toplam Ürün ({basket?.length})</h6>
            <h3>${basketTotalPrice?.toLocaleString()}</h3>
          </div>
            <Button disabled={basket?.length===0} className="btn btn-primary" handleClick={order} >Ödeme Yap</Button>

          </div>}
      </div>
    </div>
  )
}

export default BasketView