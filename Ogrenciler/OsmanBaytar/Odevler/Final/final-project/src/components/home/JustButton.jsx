import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const JustButton = () => {
  const JustButton = styled.button`
    display: inline-flex;
    padding: 12px 28px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 57px;
    border: 1.5px solid #003459;
    color: #003459;
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-weight: 500;
    line-height: 20px;
    width: 100%;
    @media (min-width: 993px) {
      display: none;
    }
  `;
  const JustButtonI = styled.i`
    width: 20px;
    height: 20px;
    padding: 4px 0px 0px 0px;
  `;

  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/Products");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <JustButton onClick={goToProducts}>
            View more
            <JustButtonI className="fa-solid fa-arrow-right" />
          </JustButton>
        </div>
      </div>
    </div>
  );
};

export default JustButton;
