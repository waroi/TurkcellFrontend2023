import styled from "styled-components";

const StyledAccountDropdown = styled.div`
  cursor: pointer;
  user-select: none;
  .dropdownButton {
    .profileImage {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .profile-text {
      font-size: 16px;
    }
  }

  .dropdownMenu {
    position: absolute;
    top: 100%;
    z-index: 1000;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    font-size: 1rem;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }
`;

export default StyledAccountDropdown;
