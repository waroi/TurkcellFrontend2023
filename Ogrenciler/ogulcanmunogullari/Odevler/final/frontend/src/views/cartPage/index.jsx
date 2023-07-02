import { useNavigate } from "react-router-dom"
import back from "../../assets/go_back_white.png"
import BasicButton from "../../components/Elements/buttons/BasicButton"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeQuantity, removeFromCart, takeCart } from "../../redux/Slicers/userSlice"
import FetchTool from "../../utils/fetchTool"
import Toast from "../../components/Elements/toast/Toast"
import ToastText from "../../components/Elements/toast/ToastText"
import { Background, CartDiv, GoBack, ProductsDiv, ItemDiv, QuantityDiv, PriceDiv, QuantityButton1, QuantityButton2, TotalPrice, OtherSection } from "./style"
import QuantityText from "../../components/Elements/cart/QuantityText"


const CartPage = () => {
  const [products, setProducts] = useState([])
  const [toast, setToast] = useState({
    message: "",
    show: false,
    color: null
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user.cart.length == 0) return
    if (products.length > 0) return

    FetchTool.getProducts().then(res => {

      let message = []

      setProducts(res)

      user.cart.forEach(item => {

        const product = res.find(product => product.id == item.id)

        if (product.rating?.count == 0 || item.quantity == 0) {
          message.push(`${item.title} removed`)
          dispatch(removeFromCart({ id: item.id }))
        } else if (item.quantity > product.rating?.count) {
          message.push(`${item.title} quantity changed`)
          dispatch(changeQuantity({ id: item.id, quantity: product.rating?.count }))
        }
      }
      )

      if (message.length > 0) {
        setToast({
          message: message.join(", "),
          show: true,
          color: "red"
        })

        setTimeout(() => {
          setToast({
            message: "",
            show: false,
            color: null
          })
        }, 3000)
      }
    })
  }, [dispatch, products, user.cart])

  const handleCheckOut = () => {
    FetchTool.getProducts().then(res => {
      let message = []
      setProducts(res)
      user.cart.forEach(item => {
        const product = res.find(product => product.id == item.id)
        if (product.rating?.count == 0 || item.quantity == 0) {
          message.push(`${item.title} removed`)
          dispatch(removeFromCart({ id: item.id }))
        } else if (item.quantity > product.rating?.count) {
          message.push(`${item.title} quantity changed`)
          dispatch(changeQuantity({ id: item.id, quantity: product.rating?.count }))
        }
      }
      )
      if (message.length > 0) {
        setToast({
          message: message.join(", "),
          show: true,
          color: "red"
        })
        setTimeout(() => {
          setToast({
            message: "",
            show: false,
            color: null
          })
        }, 3000)
      } else {
        user.cart.forEach((item) => {
          const product = res.find((product) => product.id == item.id)
          setTimeout(() => {
            FetchTool.changeProduct(item.id, {
              ...product, rating: {
                ...product.rating,
                count: product.rating.count - item.quantity,
              }
            })
          }, 1000)
          setTimeout(() => {
            FetchTool.addOrChangeToCart({ ...user, cart: [] })
          }, 200)
          dispatch(takeCart())
        })
        setToast({
          message: "Checkout successful, redirecting...",
          show: true,
          color: "green"
        })
        setTimeout(() => {
          setToast({
            message: "",
            show: false,
            color: null
          })
          navigate("/")
        }, 3000)
      }
    })
  }

  const handleChange = ({ id, quantity }) => {
    FetchTool.getProducts().then(res => {
      let message = []
      setProducts(res)

      const product = res.find(product => product.id == id)
      if (product.rating?.count == 0 || quantity == 0) {
        message.push(`${product.title} removed`)
        dispatch(removeFromCart({ id: id }))
      } else if (quantity > product.rating?.count) {
        message.push(`${product.title} quantity changed`)
        dispatch(changeQuantity({ id: id, quantity: product.rating?.count }))
      }

      if (message.length > 0) {
        setToast({
          message: message.join(", "),
          show: true,
          color: "red"
        })
        setTimeout(() => {
          setToast({
            message: "",
            show: false,
            color: null
          })
        }, 3000)
      }
    })
  }

  return (
    <Background>
      {
        toast.show && (
          <Toast bcolor={toast.color}>
            <ToastText color={toast.color}>{toast.message}</ToastText>
          </Toast>
        )
      }
      <div>
        <GoBack onClick={() => navigate(-1)} >
          <BasicButton >
            <img src={back} alt="back icon" />
            Go Back
          </BasicButton>
        </GoBack>
      </div>
      <CartDiv>
        <ProductsDiv>
          {
            user.cart.length > 0 && user.cart.map((item) => {
              return <ItemDiv key={item.id}>
                <p>
                  {item.title}
                </p>
                <QuantityDiv>
                  {
                    <QuantityButton1 onClick={() => {
                      dispatch(changeQuantity(
                        {
                          id: item.id,
                          quantity: Number(item.quantity) - 1
                        }
                      ));
                      handleChange({ id: item.id, quantity: Number(item.quantity) - 1 })
                    }
                    } disabled1={(item.quantity > 0 && products.find(product => product.id == item.id)?.rating?.count > 0) ? "true" : null}>
                      -
                    </QuantityButton1>
                  }

                  <QuantityText handleChange={handleChange} item={item} key={item.id + 2} />

                  <QuantityButton2 onClick={() => dispatch(changeQuantity({
                    id: item.id,
                    quantity: Number(item.quantity) + 1
                  }))} disabled2={(
                    item.quantity
                    < products.find(product => product.id == item.id)
                      ?.rating?.count)
                    ? "true"
                    : null}>
                    +
                  </QuantityButton2>
                </QuantityDiv>
                <PriceDiv>
                  $<span>{Number(item.quantity) * Number(item.price)}</span>
                </PriceDiv>
              </ItemDiv>
            })
          }
        </ProductsDiv>
        <OtherSection>
          <TotalPrice>
            Total: $<span>
              {
                user.cart.reduce((acc, item) => {
                  return acc + (Number(item.quantity) * Number(item.price))
                }, 0)
                  .toFixed(2)
              }
            </span>
          </TotalPrice>

          <div onClick={handleCheckOut} >
            <BasicButton>
              Checkout
            </BasicButton>
          </div>
        </OtherSection>
      </CartDiv>
    </Background>
  )
}

export default CartPage