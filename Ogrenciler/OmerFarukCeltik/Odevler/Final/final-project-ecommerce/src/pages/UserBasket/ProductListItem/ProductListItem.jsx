import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCard, getCard, handleCard } from '../../../redux/slices/cardSlice';
import { getCardData } from '../../../redux/helpers';
import { ToastContainer, toast } from 'react-toastify';
const ProductListItem = ({ item }) => {
  const [errors, setErrors] = useState(false);
  const currentUser = useSelector((state) => state.users).currentlyLoggedIn
  const [deleteProduct, setDeleteProduct] = useState(false);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products).products;
  const currProductData = productsData?.find((product) => product.id == item.itemid);
  const [product, setProduct] = useState({
    "userid": currentUser.id,
    "itemid": item.itemid,
    "count": item.count,
    "image": item.image,
    "title": item.title,
    "price": item.price
  })
  useEffect(() => {
    dispatch(handleCard(product));
    async function fetchData() {
      const newData = await getCardData();
      await dispatch(getCard(newData));
    }
    fetchData();
  }, [product])
  async function handleXClick() {
    await dispatch(deleteFromCard(product));
    const newData = await getCardData();
    await dispatch(getCard(newData));
    await toast.error("Products Deleted", {
      autoClose: 2000,
    });
    await setDeleteProduct(true)
  }
  errors && toast.error("Not enought stock", {
    autoClose: 2000,
  });
  
  return (
    <div className={`${deleteProduct || product.count < 0 ? "d-none" : "d-block"}`}>
      <div className={`col-12 py-3 mt-3 row align-items-center`} >
        <ToastContainer />
        <div className='col-2'>
          <img src={item.image} alt="" className='img-fluid' />
        </div>
        <div className='col-4 text-center'>
          <h5 className='text-primary fw-semibold'>{item.title}</h5>
        </div>
        <div className='col-4'>
          <div className='d-flex align-items-center text-center justify-content-center'>
            <button onClick={() => {
              setProduct({
                "userid": currentUser.id,
                "itemid": item.itemid,
                "count": Number(product.count) - 1,
                "image": item.image,
                "title": item.title,
                "price": item.price
              });
              currProductData?.rating.count < product?.count ? setErrors(true) : setErrors(false);
              product.count <= 0 && handleXClick();
            }
            } disabled={errors} className='btn btn-secondary rounded-2'> <i className="fa-solid fa-minus"></i></button>
            <input min={1}  value={errors ? Number(currProductData?.rating.count) : Number(product?.count)}
              disabled={product?.count < 0}
              onChange={(e) => {
                setProduct({
                  "userid": currentUser.id,
                  "itemid": item.itemid,
                  "count": Number(currProductData?.rating.count < e.target.value ? currProductData?.rating.count : e.target.value),
                  "image": item.image,
                  "title": item.title,
                  "price": item.price
                });
                currProductData?.rating.count < e.target.value ? setErrors(true) : setErrors(false);
              }} className='px-3 w-25 border-0 rounded-5' />
            <button onClick={() => {
              setProduct({
                "userid": currentUser.id,
                "itemid": item.itemid,
                "count": currProductData?.rating.count > product?.count ? Number(product.count) + 1 : currProductData?.rating.count,
                "image": item.image,
                "title": item.title,
                "price": item.price
              });
              currProductData?.rating.count -1 < product?.count ? setErrors(true) : setErrors(false);
              product.count <= 0 && handleXClick();
            }
            } disabled={errors} className='btn btn-secondary rounded-2'> <i className="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <div className='col-1 text-end'>
           {
            product.count > 0 ?
           `${Number(product.count ? product.count : item.count) * Number(item.price)} $`
           : "please add product count!"
           } 
        </div>
        <div onClick={() => handleXClick()} className='col-1 text-end btn'>
          <i className="fa-solid fa-x"></i>
        </div>
      </div>
    </div>
  )
}

export default ProductListItem