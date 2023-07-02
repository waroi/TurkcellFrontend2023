import { Link } from "react-router-dom"
import { FooterBar, FooterButton, FooterFooter, FooterIcon, FooterIconCont, FooterLink, FooterNav, FooterSearch, FooterSearchBar, FooterSection, FooterTitle } from "./footerStyle"
import face from '../../assets/face.png'
import twit from '../../assets/twit.png'
import insta from '../../assets/insta.png'
import ytube from '../../assets/ytube.png'
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <FooterSection className=" mt-5" >
            <div className="container ">
                {/* <FooterBar className="row ">
                    <FooterTitle className="col-lg-6">
                        Register now so you don`t miss our programs
                    </FooterTitle>
                    <FooterSearch className="col-lg-6">
                        <FooterSearchBar type="text" className="form-control" id="footerSearch" />
                        <button className="btn btn-primary ">Subscribe Now</button>
                    </FooterSearch>

                </FooterBar> */}

                <FooterBar className=" " >
                    <div className="row">
                        <div className="col-lg-5">
                            <FooterTitle>Register now so you don`t miss our programs</FooterTitle>
                        </div>
                        <div className="col-lg-7">
                            <FooterSearch className="col-lg-6  ">
                                <div className="row search-container">
                                    <div className="col-lg-7"> <FooterSearchBar type="text" className="form-control my-1" id="footerSearch" placeholder="Enter your Email"/></div>
                                    <div className="col-lg-5"><FooterButton className="my-1 ">Subscribe Now</FooterButton></div>
                                </div>
                            </FooterSearch>

                        </div>
                    </div>

                </FooterBar>
                
                <FooterNav className="navbar-nav">
                    <div className="row w-100 ">
                        <FooterLink className=" col-lg-6 d-flex  ">
                            <li className="nav-item" ><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item mx-2"><Link to="/products" className="nav-link"> Products</Link></li>
                            <li className="nav-item nav-link mx-2">About</li>
                            <li className="nav-item nav-link mx-2">Contact</li>
                        </FooterLink>

                        <FooterIconCont className="col-lg-6  ">
                            <li className="nav-item" ><FooterIcon src={face} alt="" /></li>
                            <li className="nav-item "><FooterIcon src={twit} alt="" /></li>
                            <li className="nav-item "><FooterIcon src={insta} alt="" /></li>
                            <li className="nav-item "><FooterIcon src={ytube} alt="" /></li>

                        </FooterIconCont>
                    </div>
                </FooterNav>
                <hr />
                <FooterFooter className="d-flex justify-content-between align-items-center">
                    <p className="reserved">© 2022 Monito. All rights reserved.</p>
                    <img className="footer-logo" src={logo} alt="Logo" />
                    < div className="d-flex terms gap-5">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div >
                    {/* yorum satırı footerStyle içinde mobil için olanı */}
                </FooterFooter>
            </div>
        </FooterSection>
    )
}

export default Footer