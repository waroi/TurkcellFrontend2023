import OneProduct from "./OneProduct"
import { useSelector } from "react-redux"
import PetSeller from './PetSeller'
import BannerTwo from "./BannerTwo"
import BannerOne from "./BannerOne"
import Mainbanner from "./Mainbanner"
import { WhiteBorderButton, WhiteBorderButtonForMobile } from "../buttons/buttonStyle"
import rarrow from '../../assets/rarrow.png'
import { AllProductBlueTitle, AllProductShadowTitle, TempHomepageProducts } from "./styledOneProduct"
import PetKnowledge from "./PetKnowledge"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const AllProducts = () => {
    const loggedUser = useSelector((state) => state.setLoggedUser?.loggedUserObject);
    const userIsLog = JSON.parse(sessionStorage.getItem('loggedUser'))
    const getDatas = useSelector((state) => state.getProcessName.mainDataArray)
    const navigate = useNavigate()
    const checkUserLogin = () => {
        if (loggedUser == "noUser" || userIsLog == null) {
            toast.error("Lütfen önce giriş yapınız!", {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                onClose: () => {
                    navigate("/signup");
                },
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            navigate("/products")

        }
    }
    return (
        <div>
            <Mainbanner />
            <div className="container">
                <div className="row mt-4">
                    <div className="d-flex justify-content-between mb-2">
                        <div className=" m-0 p-0">
                            <AllProductShadowTitle className="m-0 p-0">Whats new?</AllProductShadowTitle>
                            <AllProductBlueTitle className="m-0 p-0">Take a look at some of our pets</AllProductBlueTitle>
                        </div>
                        <a onClick={() => { checkUserLogin() }}>
                            <WhiteBorderButton >
                                <div>
                                    View Intro
                                    <img src={rarrow} alt="" />
                                </div>
                            </WhiteBorderButton>
                        </a>
                    </div>

                    {
                        getDatas?.length > 0 &&
                        getDatas?.slice(0, 8).map((item) => {
                            return <div className="col-6 col-lg-3" key={item.id} ><OneProduct item={item} /></div>
                        })
                    }
                </div>
                <a onClick={() => { checkUserLogin() }}>
                    <WhiteBorderButtonForMobile className="w-100">
                        <div>
                            View Intro
                            <img src={rarrow} alt="" />
                        </div>
                    </WhiteBorderButtonForMobile>
                </a>
                <BannerOne />
                <TempHomepageProducts className="row">
                    <div className="d-flex justify-content-between mb-2">
                        <div className=" m-0 p-0">
                            <AllProductShadowTitle className="m-0 p-0">Hard to choose right products for your pets?</AllProductShadowTitle>
                            <AllProductBlueTitle className="m-0 p-0">Our Products</AllProductBlueTitle>
                        </div>
                        <WhiteBorderButton >
                            <div>
                                View Intro
                                <img src={rarrow} alt="" />
                            </div>
                        </WhiteBorderButton>
                    </div>
                    {
                        getDatas?.length > 0 &&
                        getDatas?.slice(9, 17).map((item) => {
                            return <div className="col-6 col-lg-3" key={item.id}><OneProduct item={item} /></div>
                        })
                    }
                </TempHomepageProducts>
                <PetSeller />
                <BannerTwo />
                <PetKnowledge />
            </div>
        </div>
    )
}

export default AllProducts