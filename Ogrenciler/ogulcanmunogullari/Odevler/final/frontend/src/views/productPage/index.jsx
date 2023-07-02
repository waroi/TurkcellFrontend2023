import { Page, ProductSection, OtherProductsSection, ProductImages, ProductInfo, Breadcrumb, ProductCTA, ProductInfoGrid, ImgSlider, MainImg, SliderImg, Container, Flex, Cards, EditButton } from "./style"
import breadcrumb_icon from "../../assets/breadcrumb_icon.png"
import guarantee1 from "../../assets/guarantee1.png"
import guarantee2 from "../../assets/guarantee2.png"
import Share from "../../assets/share.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"
import BasicButton from "../../components/Elements/buttons/BasicButton"
import TransparentButton from "../../components/Elements/buttons/TransparentButton"
import BasicCard from "../../components/Elements/card/BasicCard"

import ToastText from "../../components/Elements/toast/ToastText"
import Toast from "../../components/Elements/toast/Toast"
import { mode } from "../../redux/Slicers/adminSlice"
import { addOrChangeToCart } from "../../redux/Slicers/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import FetchTool from "../../utils/fetchTool"
import { useEffect, useState } from "react"
import EditSection from "../../components/edit"

const ProductPage = () => {

  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [mainImg, setMainImg] = useState("")
  const [toast, setToast] = useState({
    show: false,
    message: "",
    color: ""
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const admin = useSelector(state => state.admin)
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user.name == null) {
      setToast({
        show: true,
        message: "You must login",
        color: "red"
      })
      setTimeout(() => {
        setToast({
          show: false,
          message: "",
          color: ""
        })
        navigate("/")
      }, 3000)
    }
  }, [navigate, user.name])

  const handleAddToCart = () => {

    const { title, id, price, image } = product

    dispatch(addOrChangeToCart({ title, id, price, image, quantity: 1 }))

    setToast({
      show: true,
      message: "Product added to cart",
      color: "green"
    })

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        color: ""
      })
    }, 3000)

    FetchTool.getProducts().then(res => {
      setProducts(res)
    })
  }

  useEffect(() => {
    if (products.length > 0) return;
    FetchTool.getProducts().then(res => {
      setProducts(res)
    })
  }, [products])

  useEffect(() => {
    FetchTool.getProduct(id).then((res) => {
      setProduct(res)
      setMainImg(res.image)
    })
    window.scrollTo(0, 0)
  }, [id, admin.adminMode])


  return (
    <Page>
      {
        toast.show && (
          <Toast bcolor={toast.color}>
            <ToastText color={toast.color}>
              {toast.message}
            </ToastText>
          </Toast>
        )
      }
      {
        admin.adminMode && (
          <EditSection product={product} />
        )
      }
      <ProductSection>
        <ProductImages>
          <MainImg>
            <img src={mainImg} alt="product image" />
          </MainImg>
          <ImgSlider>
            <SliderImg onClick={() => setMainImg("https://teknoseyir.com/wp-content/uploads/2023/03/ec9771448d2f322.jpg")}>
              <img src="https://teknoseyir.com/wp-content/uploads/2023/03/ec9771448d2f322.jpg" alt="product image" />
            </SliderImg>
            <SliderImg onClick={() => setMainImg("https://i.pcmag.com/imagery/reviews/03hETGO7ucQbJTfJwJNgXwJ-1..v1643917335.jpg")}>
              <img src="https://i.pcmag.com/imagery/reviews/03hETGO7ucQbJTfJwJNgXwJ-1..v1643917335.jpg" alt="product image" />
            </SliderImg>
            <SliderImg onClick={() => setMainImg("https://www.donanimhaber.com/images/images/haber/159392/src/nvidia-rtx-4090-ve-rtx-4080-li-laptoplar-ne-zaman-cikacak159392_0.jpg")}>
              <img src="https://www.donanimhaber.com/images/images/haber/159392/src/nvidia-rtx-4090-ve-rtx-4080-li-laptoplar-ne-zaman-cikacak159392_0.jpg" alt="product image" />
            </SliderImg>
            <SliderImg onClick={() => setMainImg(product.image)}>
              <img src={product.image} alt="product image" />
            </SliderImg>
          </ImgSlider>
        </ProductImages>
        <ProductInfo>
          <Breadcrumb>
            <Link to={"/"}>
              Home
            </Link>
            <img src={breadcrumb_icon} alt="breadcrumb icon" />
            <Link to={"/category"}>
              Categories
            </Link>
            <img src={breadcrumb_icon} alt="breadcrumb icon" />
            <p>
              This Product
            </p>
          </Breadcrumb>
          <h1>
            {product.title}
          </h1>
          <h3>
            {product.price} Dollar
          </h3>
          <div className="buttonsDiv">
            <div className={
              (user.cart.find((item) => item.id == product.id) || (product.rating?.count == 0) ? "disabled" : "")
            } onClick={handleAddToCart}>
              <BasicButton color={
                (user.cart.find((item) => item.id == product.id) || (product.rating?.count == 0) ? "gray" : null)
              } >
                {
                  (user.cart.find((item) => item.id == product.id)) ? "Already in Cart" : (product.rating?.count == 0) ? "No Stock" : "Add to Cart"
                }
              </BasicButton>
            </div>
            <TransparentButton>
              Chat with Monito
            </TransparentButton>
          </div>
          {
            user.isAdmin && (
              <EditButton onClick={() => dispatch(mode())}>
                <BasicButton>
                  Edit
                </BasicButton>
              </EditButton>
            )
          }
          <div className="mobileSocial">
            <h3>Information</h3>
            <div>
              <img src={Share} />
              Share
            </div>
          </div>
          <ProductInfoGrid>
            <h6>Category: </h6>
            <p>{product.category} </p>
          </ProductInfoGrid>
          <ProductInfoGrid>
            <h6>Rating: </h6>
            <p>{product.rating?.rate} </p>
          </ProductInfoGrid>
          <ProductInfoGrid>
            <h6>Information: </h6>
            <p>{product.description} </p>
          </ProductInfoGrid>
        </ProductInfo>
        <ProductCTA>
          <div className="guarantee">
            <p>
              <img src={guarantee1} alt="icon" />
              100% health guarantee for pets
            </p>
            <p>
              <img src={guarantee2} alt="icon" />
              100% guarantee of pet identification
            </p>
          </div>
          <div className="computerSocial">
            <img src={Share} />
            Share:
            <div className="social">
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
              <img src={youtube} />
            </div>
          </div>
        </ProductCTA>
      </ProductSection>
      <OtherProductsSection>
        <Container>
          <Flex mdirection="column" direction="column">
            <h4>Whats new?</h4>
            <Flex justify={"space-between"}>
              <h2>See More Pupples</h2>
            </Flex>
            <Cards>
              {products
                .filter(product => product.id != id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 8)
                .map((product) => {
                  return (
                    <BasicCard key={product.id} product={product} />
                  )
                })}
            </Cards>
          </Flex>
        </Container>
      </OtherProductsSection>
    </Page>
  )
}

export default ProductPage