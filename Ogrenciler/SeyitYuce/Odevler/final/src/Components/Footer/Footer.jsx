import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import { styled } from "styled-components";
import { toast } from "react-toastify";

const Footer = () => {
  const StyledFooterBG = styled.footer`
    border-radius: 20px 20px 0px 0px;
    background: linear-gradient(
      134deg,
      #fceed5 6.17%,
      #fceed5 75.14%,
      #ffe7ba 100%
    );
    margin-top: 40px;
    padding: 40px 0;
    padding-bottom: 20px;
  `;

  const StyledSubscribeCard = styled.div`
    border-radius: 16px;
    background: var(--primary-color-dark-blue, #003459);
    padding: 16px;
  `;
  const StyledSubscribeCardTitle = styled.h5`
    color: var(--neutral-color-00, #fdfdfd);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-transform: capitalize;
    margin: auto 0;
  `;
  const StyledSubscribeInnerCard = styled.div`
    display: flex;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    border-radius: 14px;
    background: #fff;
  `;
  const StyledSubscribeInput = styled.input`
    display: flex;
    padding: 14px 28px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #99a2a5;
    background: #fff;
    width: 100%;
  `;

  const StyledFooterUrls = styled.div`
    margin: 40px 16px;
    padding-bottom: 40px;
    border-bottom: 1px solid #ccd1d2;
  `;

  const StyledFooterNavs = styled.li`
    color: var(--neutral-color-100, #00171f);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  `;

  const StyledFooterImg = styled.img`
    width: 115px;
    height: 40px;
    flex-shrink: 0;
    margin: 0 auto;
    margin-bottom: 32px;
  `;

  const StyledFooterTerms = styled.li`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  `;
  const StyledFooterRights = styled.span`
    color: var(--neutral-color-60, #667479);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  `;

  return (
    <StyledFooterBG className="bg-secondary rounded">
      <div className="container">
        <StyledSubscribeCard className="d-flex flex-column flex-md-row">
          <StyledSubscribeCardTitle className="col-12 col-md-6 align-middle">
            Register now so you don't miss our programs
          </StyledSubscribeCardTitle>
          <StyledSubscribeInnerCard className="col-12 col-md-6 d-flex flex-column flex-md-row container gap-2 mt-3 rounded">
            <StyledSubscribeInput
              type="email"
              id="emailSubscribe"
              placeholder="Enter your email"
            />
            <Buttons
              variation="textOnly btnLarge btn1 w-100 rounded-3 fs-6 fw-medium"
              onClick={() => {
                toast.success("Succesfully Subscribed", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }}
            >
              Subscribe Now
            </Buttons>
          </StyledSubscribeInnerCard>
        </StyledSubscribeCard>
        <StyledFooterUrls className="d-flex flex-column flex-md-row justify-content-between">
          <ul className="col-12 col-md-4 d-flex justify-content-between px-0 mb-4">
            <StyledFooterNavs>
              <Link className="text-decoration-none" to={"/"}>
                Home
              </Link>
            </StyledFooterNavs>
            <StyledFooterNavs>
              <Link className="text-decoration-none" to={"/products"}>
                Products
              </Link>
            </StyledFooterNavs>
            <StyledFooterNavs>
              <Link className="text-decoration-none" to={"/about"}>
                About
              </Link>
            </StyledFooterNavs>
            <StyledFooterNavs>
              <Link className="text-decoration-none" to={"/contact"}>
                Contact
              </Link>
            </StyledFooterNavs>
          </ul>
          <ul className="col-12 col-md-4 d-flex justify-content-evenly">
            <li>
              <Link>
                <BiLogoFacebookCircle className="text-dark fs-2" />
              </Link>
            </li>
            <li>
              <Link>
                <BiLogoTwitter className="text-dark fs-2" />
              </Link>
            </li>
            <li>
              <Link>
                <AiOutlineInstagram className="text-dark fs-2" />
              </Link>
            </li>
            <li>
              <Link>
                <BiLogoYoutube className="text-dark fs-2" />
              </Link>
            </li>
          </ul>
        </StyledFooterUrls>
        <div className="d-flex flex-column flex-md-row">
          <StyledFooterImg
            src="/src/assets/frame.png"
            alt=""
            className="order-md-2"
          />
          <ul className="mx-auto d-flex gap-5 order-md-3">
            <StyledFooterTerms>Terms of Service</StyledFooterTerms>
            <StyledFooterTerms>Privacy Policy</StyledFooterTerms>
          </ul>
          <StyledFooterRights className="mx-auto order-md-1">
            © 2022 Monito. All rights reserved.
          </StyledFooterRights>
        </div>
      </div>
    </StyledFooterBG>
  );
};

export default Footer;
