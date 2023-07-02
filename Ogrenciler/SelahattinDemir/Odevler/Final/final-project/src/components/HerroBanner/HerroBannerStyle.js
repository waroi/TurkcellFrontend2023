import styled from "styled-components";

export const HerroBannerContainer = styled.section`
  border-radius: 0px 0px 40px 40px;
  background: var(
    --linear,
    linear-gradient(134deg, #fceed5 6.17%, #fceed5 75.14%, #ffe7ba 100%)
  );
  position: relative;
  overflow: hidden;
`;

export const Rectangle1 = styled.div`
  width: 57.103px;
  height: 57.103px;
  transform: rotate(25.23deg);
  border-radius: 20px;
  background: #f7dba7;
  position: absolute;
  top: 90px;
  left: 275px;

  @media screen and (max-width: 768px) {
    top: 5px;
    left: 10px;
  }
`;

export const Rectangle2 = styled.div`
  width: 535px;
  height: 535px;
  transform: rotate(25.23deg);
  border-radius: 99px;
  background: #f7dba7;
  position: absolute;
  top: 150px;
  right: 230px;

  @media screen and (max-width: 768px) {
    width: 528.983px;
    height: 528.983px;
    border-radius: 48px;
    top: 330px;
    right: -210px;
  }
`;

export const Rectangle3 = styled(Rectangle2)`
  transform: rotate(9.355deg);
  background: #003459;
  top: 180px;
  right: 280px;

  @media screen and (max-width: 768px) {
    top: 340px;
    right: -200px;
  }
`;

export const Rectangle4 = styled.div`
  width: 21.471px;
  height: 21.471px;
  transform: rotate(-43.005deg);
  border-radius: 6px;
  background: #002a48;
  position: absolute;
  top: 100px;
  right: 700px;

  @media screen and (max-width: 768px) {
    top: 65px;
    right: 90px;
  }
`;

export const Rectangle5 = styled.div`
  width: 14.626px;
  height: 14.626px;
  transform: rotate(20.792deg);
  border-radius: 4px;
  background: #f7dba7;
  position: absolute;
  top: 50px;
  right: 680px;

  @media screen and (max-width: 768px) {
    top: 45px;
    right: 60px;
  }
`;

export const Rectangle6 = styled.div`
  width: 27.498px;
  height: 27.498px;
  transform: rotate(-22.85deg);
  border-radius: 9px;
  background: #f7dba7;
  position: absolute;
  top: 90px;
  right: 695px;

  @media screen and (max-width: 768px) {
    top: 55px;
    right: 85px;
  }
`;

export const Rectangle7 = styled(Rectangle2)`
  transform: rotate(56.47deg);
  opacity: 0.4000000059604645;
  top: 430px;
  right: 800px;
`;

export const BannerImage = styled.img`
  transform: translate(10%, 0%);

  @media screen and (max-width: 768px) {
    transform: translate(0%, 0%);
  }
`;

export const BannerTitle = styled.h2`
  transform: translate(0%);
  color: #002a48;
  font-size: 60px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 800;
  line-height: 68px;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const BannerSecondTitle = styled(BannerTitle)`
  font-size: 46px;
  font-weight: 700;
  line-height: 60px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 35px;
    margin-top: -10px;
  }
`;

export const BannerText = styled.p`
  transform: translate(0%);
  color: #242b33;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const ButtonView = styled.button`
  transform: translate(0%);
  display: inline-flex;
  background: transparent;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  color: #003459;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    padding: 10px 20px 8px 20px;
  }
`;

export const ButtonExplore = styled(ButtonView)`
  background: #003459;
  border: none;
  color: #fdfdfd;
`;
