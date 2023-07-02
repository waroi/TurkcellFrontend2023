import { useState } from "react";
import styles from "./basketItem.module.css"
import { deleteById, updateItemQuantity } from "../../services/basket";
import { useSelector } from "react-redux";

const BasketItem = ({basketItem, setFlag}) => {
    const user = useSelector((state) => state.userInfo.userInfo);
    const [count, setCount] = useState(basketItem?.quantity)

    const handleCountChange = async (newCount) => {
        await updateItemQuantity(user?.payload?.id, basketItem?.product?.id, newCount)
        setFlag(true)
    }

    const handleDelete = async () => {
       await deleteById(user?.payload?.id, basketItem?.product?.id)
       setFlag(true)
    }
   
    return (
      <div className=" border rounded-3 row p-2 mb-3">
          <div className="col-lg-3 col-sm-12 d-flex align-items-center flex-column">
              <img width={100} src={basketItem?.product?.image} className="img-fluid rounded-3" alt="product" />
              <div className={styles.counter}>
                  <button
                  className={`${styles["count-button"]} ${styles.dec}`}
                  onClick={() => {
                      if (count > 1) {
                      setCount(prevCount => prevCount - 1);
                      handleCountChange(count - 1);
                      }
                  }}
                  disabled={count <= 1}
                  >
                  -
                  </button>
                  <input
                  type="number"
                  value={count}
                  className={styles.input}
                  onChange={(e) => {
                      const newCount = Number(e.target.value);
                      setCount(newCount);
                    //   handleCountChange(newCount);
                  }}
                  onBlur={(e) => {
                    const newCount = Number(e.target.value);
                      if(newCount <= 1) setCount(1);
                      if(newCount >= basketItem?.product?.rating?.count) {
                          setCount(basketItem?.product?.rating?.count);
                          return handleCountChange(basketItem?.product?.rating?.count);
                      }
                      handleCountChange(newCount);
                  }}
                  />
                  <button
                  className={`${styles["count-button"]} ${styles.inc}`}
                  onClick={() => {
                      if (count < basketItem?.product?.rating?.count) {
                      setCount(prevCount => prevCount + 1);
                      handleCountChange(count + 1);
                      }
                  }}
                  disabled={count == basketItem?.product?.rating?.count}
                  >
                  +
                  </button>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 d-flex flex-column justify-content-between ">
              <div className="d-flex justify-content-between">
                  <h5>{basketItem?.product?.title}</h5>
                  </div>
              
          </div>
          <div className="col-lg-1 d-flex flex-column justify-content-between">
          <button onClick={handleDelete} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
          <h5>${(count * basketItem?.product?.price).toLocaleString()}</h5>
          </div>
      </div>
    );
}

export default BasketItem;