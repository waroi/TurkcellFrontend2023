import styled from "styled-components";

const DropdownStyle = styled.div`
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
    margin-top: -52px;
    position: absolute;
    background-color: #fff;
    z-index: -1;
    float: left;
    min-width: 10rem;
    padding: 4rem 0 1rem;
    font-size: 1rem;
    list-style: none;
    background-clip: padding-box;
    border-radius: 20px;
    animation: slideIn 0.2s ease-in;
  }
  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default DropdownStyle;
