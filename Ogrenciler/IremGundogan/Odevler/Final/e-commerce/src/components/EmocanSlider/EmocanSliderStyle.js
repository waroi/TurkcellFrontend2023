import styled from "styled-components";

const EmocanSliderStyle = styled.div`
  margin: 50px 0;
  .slider {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
  }
  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-slide img {
    width: 100%;
    height:auto;
  }
  .card {
    border-radius: 8px;
    overflow: hidden;
    height: 300px;
    cursor: pointer;
    box-shadow: 5px 5px 10px 0 #dbdada;
    display:flex !important;
    justify-content:center;
  }
  .slick-arrow {
    display:none !important;
  }
`;

export default EmocanSliderStyle;
