import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Banner = styled.img`
  width: 135%;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const SelectedCategories = styled.div`
  margin-top: 20px;
  p {
    margin-bottom: 5px;
  }
`;
export const Category = styled.div`
  margin-top: 50px;
  margin-left: 20px;
`;
export const SortDiv = styled.div`
  @media (max-width: 992px) {
    display: flex;
    flex: start;
    margin-bottom: 20px;
  }
`;
