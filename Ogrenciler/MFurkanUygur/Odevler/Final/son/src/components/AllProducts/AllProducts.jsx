import OneProduct from "./OneProduct"
import { useSelector } from "react-redux"


import PetSeller from './PetSeller'
import BannerTwo from "./BannerTwo"
import BannerOne from "./BannerOne"
import Mainbanner from "./Mainbanner"
import { WhiteBorderButton } from "../buttons/buttonStyle"
import rarrow from '../../assets/rarrow.png'
import { AllProductBlueTitle, AllProductShadowTitle, TempHomepageProducts } from "./styledOneProduct"
import PetKnowledge from "./PetKnowledge"


const AllProducts = () => {

    const getDatas = useSelector((state) => state.getProcessName.mainDataArray)

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
                        <WhiteBorderButton >
                            <div>
                                View Intro
                                <img src={rarrow} alt="" />
                            </div>
                        </WhiteBorderButton>
                    </div>

                    {
                        getDatas?.length > 0 &&
                        getDatas?.slice(0, 8).map((item) => {
                            return <div className="col-6 col-lg-3" key={item.id} ><OneProduct item={item} /></div>
                        })
                    }
                </div>
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