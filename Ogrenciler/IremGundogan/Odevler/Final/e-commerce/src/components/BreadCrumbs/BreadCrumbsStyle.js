import styled from "styled-components";

const Breadcrumbs = styled.div`
  color: #667479;
  font-size: 16px;
  a {
    color: #667479;
    text-decoration: none;
    &:hover {
      color: #000000;
    }
  }
  @media (max-width:992px) {
    font-size: 12px;
  }
`;

export default Breadcrumbs;
