import styled from "styled-components";

export const BannerStyle = styled.div`
  background: #fceed5;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const Title = styled.h3`
  margin-top: 50px;
  font-weight: bold;
  color: #003459;
  font-size: 38px;
`;
export const TitleH4 = styled.h3`
  margin-top: 10px;
  font-weight: bold;
  color: #003459;
  font-size: 24px;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;
