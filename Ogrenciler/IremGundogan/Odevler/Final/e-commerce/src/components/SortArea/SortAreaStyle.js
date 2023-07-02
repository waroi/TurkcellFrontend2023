import styled from "styled-components";
const SortAreaStyle = styled.div`
  .sort {
    padding: 6px 20px;
    border-radius: 20px;
    border: 1px solid #ccd1d2;
    color: #667479;
    select {
      outline: none;
      color: #667479;
      font-weight: 600;
    }
    @media (max-width: 992px) {
      padding: 10px 12px 8px 20px;
      align-items: center;
      gap: 4px;
      font-size:14px;
      h5{
        font-size:14px;
      }
    }
  }
`;

export default SortAreaStyle;
