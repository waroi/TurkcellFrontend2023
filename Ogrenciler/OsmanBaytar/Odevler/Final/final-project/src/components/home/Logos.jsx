import {
  LogosContainer,
  LogosUpper,
  LogosText,
  LogosTitle,
  LogosUpperLeft,
  LogosBottom,
} from "../../styles/LogosStyle";
import { BasicTitleButton, BasicTitleI } from "../../styles/BasicTitleStyle";

const Logos = () => {
  return (
    <LogosContainer className="container">
      <LogosUpper>
        <LogosUpperLeft>
          <LogosText>Proud to be part of</LogosText>
          <LogosTitle>Product Sellers</LogosTitle>
        </LogosUpperLeft>
        <BasicTitleButton>
          View all our sellers
          <BasicTitleI className="fas fa-arrow-right"></BasicTitleI>
        </BasicTitleButton>
      </LogosUpper>
      <LogosBottom>
        <img src="../../../public/Logo1.png" />
        <img src="../../../public/Logo2.png" />
        <img src="../../../public/Logo3.png" />
        <img src="../../../public/Logo4.png" />
        <img src="../../../public/Logo5.png" />
        <img src="../../../public/Logo6.png" />
        <img src="../../../public/Logo7.png" />
      </LogosBottom>
    </LogosContainer>
  );
};

export default Logos;
