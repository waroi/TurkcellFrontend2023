import StyledFooter from "./StyledFooter"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import { Link } from "react-router-dom"
import logo from "../../assets/Logo.svg"

const Footer = () => {
    return (
        <StyledFooter className="mt-5">
            <div className="container">
                <div className="row d-flex mx-auto subscribe">
                    <div className="col-lg-4">
                        <h4>Register Now So You Dont Miss Our Programs</h4>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="inputArea">

                            <input type="email" name="emailSubscire" id="emailSubscribe" placeholder="Enter your Email" />

                            <ButtonPrimary className="squaredPrimary">Subscribe Now</ButtonPrimary>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center text-center pb-5 footerMiddle">
                    <div className="col-lg-4">
                        <div className="row justify-content-between">
                            <div className="col-3 footerNav">
                                <Link to={"/"}>Home</Link>
                            </div>
                            <div className="col-3 footerNav">
                                <Link to={"/products"}>Products</Link>
                            </div>
                            <div className="col-3 footerNav">
                                <Link to={"/"}>About</Link>
                            </div>
                            <div className="col-3 footerNav">
                                <Link to={"/"}>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row justify-content-center">
                            <div className="col-2 footerSocial">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="col-2 footerSocial">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="col-2 footerSocial">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="col-2 footerSocial">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between mt-3 pb-5 company">
                    <div className="col-lg-4 text-center text-lg-start">
                        2022 Monito, All rights reserved
                    </div>
                    <div className="col-lg-4 text-center">
                        <Link to={"/"}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <span className="mx-3">Terms of Service</span>
                        <span  >Privacy Policy</span>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer