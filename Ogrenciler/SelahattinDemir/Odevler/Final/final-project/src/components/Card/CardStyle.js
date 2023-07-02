import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  padding: 8px 8px 0px 8px;
  margin-bottom: 14px;
  background: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;

export const CardImage = styled.div`
  max-width: 264px;
  height: 264px;
  text-align: center;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
  color: #00171f;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

export const Description = styled(Title)`
  height: 30px;
  font-size: 12px;
  line-height: 18px;
  color: #667479;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProductInfo = styled(Title)`
  font-size: 14px;
  line-height: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: -10px;
  }
`;

export const DetailCardContainer = styled.div`
  padding: 22px 20px;
  border-radius: 20px;
  border: 1px solid #ebeeef;
  background: #fdfdfd;
  position: relative;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const Quantity = styled(ProductInfo)`
  font-weight: 500;
  color: #99a2a5;
`;

export const DetailTitle = styled(Title)`
  font-size: 24px;
  line-height: 36px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
    height: 35px;
  }
`;

export const DetailPrice = styled(DetailTitle)`
  font-size: 20px;
  line-height: 32px;
  color: #002a48;
`;

export const ProductInfoContainer = styled.div`
  max-width: 530px;
  padding: 9px 12px;
  border-radius: 10px;
  background: var(
    --linear,
    linear-gradient(134deg, #fceed5 6.17%, #fceed5 75.14%, #ffe7ba 100%)
  );
`;

export const DetailImageContainer = styled(Title)`
  max-width: 560px;
  max-height: 476px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const SocialInfoContainer = styled.div`
  padding: 6px 10px;
`;

export const ButtonBg = styled(Link)`
  padding: 5px 28px 5px 28px;
  border-radius: 57px;
  background: #003459;
  color: #fdfdfd;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;

  @media (max-width: 768px) {
    padding: 5px 20px;
  }
`;

export const ButtonBorder = styled.button`
  padding: 5px 28px 5px 24px;
  border-radius: 57px;
  border: 2px solid #002a48;
  color: #002a48;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
  align-items: center;
  display: flex;
  &:disabled {
    background: #ebeeef;
    color: #667479;
    border: 2px solid #ebeeef;
    cursor: not-allowed;
  }
`;

export const TableTd = styled.td`
  border-bottom: 1px solid #ebeeef;
  padding: 8px 0px;
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
`;

export const SliderContainer = styled.div`
  width: 90px;

  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  &.active {
    border: 3px solid #f1d092;
  }
`;

export const SliderArrow = styled.div`
  position: absolute;
  top: 250px;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 20px;
  background: rgba(38, 36, 36, 0.4);
  text-align: center;
  line-height: 40px;
  font-size: 34px;
  color: #fff;
  cursor: pointer;

  &.prev {
    left: 40px;
  }

  &.next {
    left: 550px;
  }

  @media (max-width: 768px) {
    top: 200px;
    &.next {
      left: 300px;
    }
  }
`;
