import styled from "styled-components";

export const BannerBottomContainer = styled.section`
  border-radius: 20px;
  background: #ffb775;
  position: relative;
  overflow: hidden;
`;

export const BannerText = styled.div`
  transform: translate(0%);
  color: #242b33;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-left: 60px;
`;

export const Rectangle1 = styled.div`
  width: 782.292px;
  height: 787.54px;
  transform: rotate(65.251deg);
  border-radius: 99px;
  background: #fceed5;
  position: absolute;
  top: -380px;
  left: -150px;
`;

export const Rectangle2 = styled(Rectangle1)`
  transform: rotate(50.251deg);
  opacity: 0.30000001192092896;
  background: var(
    --linear,
    linear-gradient(134deg, #fceed5 6.17%, #fceed5 75.14%, #ffe7ba 100%)
  );
  top: 140px;
  left: 730px;
`;
