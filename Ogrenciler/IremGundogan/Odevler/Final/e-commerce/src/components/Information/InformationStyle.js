import styled from "styled-components";

const InformationStyle = styled.div`
  width: 100%;
  padding: 60px 0;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
  .wrapper {
    gap: 30px;
  }
  @media (max-width: 992px) {
  .button {
      display: none;
    }
  }
  .btn {
    margin: 0 auto; 
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

export default InformationStyle;
