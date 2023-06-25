import styled from "styled-components";
const StyledNavbar = styled.nav`
  color: #103559;
  h1 {
    font-size: 32px;
    font-weight: 900;
  }
  margin-top: 10px;
  background-color: red;
  a {
    text-decoration: none;
    color: #103559;
    font-weight: 700;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navigation {
      display: flex;
      gap: 2rem;
    }

    .searchBar {
      form {
        input {
          border-radius: 15px;
          width: 250px;
          padding: 5px 10px 5px 30px;
          background-image: url("../assets/Search_Magnifying_Glass_Gray.svg./."); /* Replace with the path to your image */
          background-repeat: no-repeat;
          background-position: left center; /* Adjust the position as needed */
          background-size: 2000px;
        }
      }
    }

    .accountSection {
      display: flex;
      gap: 5rem;
    }
  }
`;

export default StyledNavbar;
