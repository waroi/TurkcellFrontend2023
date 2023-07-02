import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  border-radius: 10px;
  margin: 35px 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 20px 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Image = styled.div`
  width: 100%;
  margin: 15px 15px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 500px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 15px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Stock = styled.h2`
  margin-bottom: 10px;
`;

export const Price = styled.h2`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "blue")};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
