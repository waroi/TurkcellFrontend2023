import styled from "styled-components";

const Paw = styled.div`
  padding: 60px 0;
  .paw {
    border-radius: 20px;
    background: url("../../../assets/paw.png") center center / cover,
      rgb(255, 183, 117);
    padding: 60px 55% 60px 80px;
    h1 {
      color: #003459;
      font-weight: 700;
      font-size: 52px;
      display: inline-flex;
      align-items: center;
      gap: 15px;
    }
    .banner-buttons {
      display: flex;
      gap: 20px;
    }
    @media (max-width: 992px) {
      padding: 0px 30% 20px 23px;
      display: none;
    }
  }
`;

export default Paw;
