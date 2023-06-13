import styled from "styled-components";

export const UpperHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #0d1421;
  border-bottom: 0.5px solid rgb(50 53 70);
`;

export const UpperContainer = styled.div`
  max-width: 1240px;
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const TextArea = styled.div`
  width: 70%;
  display: flex;
  gap: 1rem;
  color: #a1a7bb;
  font-weight: 600;
  margin-right: 4rem;
  > p {
    margin-top: 1rem;
    font-size: 11px;
    > span {
      color: #6188ff;
    }
  }
`;

export const SettingsArea = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  gap: 10px;
  font-size: 20px;
`;

export const CustomSelect = styled.select`
  border: none;
  background-color: #0d1421;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 0.5rem;
  outline: none;
`;

export const CustomOption = styled.option`
  background-color: white;
  color: black;
`;

export const CustomButton = styled.button`
  align-items: center;
  background: transparent;
  border-color: #486dfb;
  border-radius: 8px;
  display: inline-flex;
  color: rgb(255, 255, 255);
  cursor: pointer;
  width: auto;
  height: 32px;
  font-size: 12px;
  padding: 0px 16px;
  line-height: 18px;
  font-weight: 600;
  width: max-content;
`;

export const CustomButton2 = styled(CustomButton)`
  background-color: #486dfb;
  color: white;
`;

export const BottomHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #0d1421;
  height: 75px;
  border-bottom: 0.5px solid rgb(50 53 70);
`;

export const BottomContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const CategoryArea = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-right: 4rem;
  align-items: center;
  > p {
    font-size: 14px;
    font-weight: 700;
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
      color: #6188ff;
    }
  }
`;

export const LogoImg = styled.img`
  color: white;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-right: 1rem;
`;

export const SearchArea = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  > input {
    width: 240px;
    background-color: rgb(50 53 70);
    border: none;
    outline: none;
    border-radius: 8px;
    color: white;
    padding: 8px;
  }
`;
