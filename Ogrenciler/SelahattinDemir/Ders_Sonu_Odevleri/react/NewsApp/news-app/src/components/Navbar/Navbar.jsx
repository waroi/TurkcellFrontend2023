/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
const Navbar = ({ setCountry }) => {
  const StyledNav = styled.nav`
    width: 100%;
  `;
  const StyledCon = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
  `;
  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  `;
  const StyledLi = styled.li`
    border: 1px inset black;
    padding: 10px 25px;
    border-radius: 20px;
    background-color: #232325;
    cursor: pointer;
    &:hover {
      background-color: #2e2e2e;
    }
  `;
  const searchBox = document.getElementById("searchBox");
  const googleIcon = document.getElementById("googleIcon");

  function googleIcons() {
    searchBox.classList.toggle("active");
  }

  return (
    <StyledNav>
      <img
        src="https://cdn.discordapp.com/attachments/1089995966817517618/1116484291564687400/depositphotos_234595408-stock-photo-investigation-board-pinned-photos-newspapers_1.png"
        alt=""
        width="100%"
        className="nav-bg-image"
      />
      <StyledCon>
        <StyledDiv>
          <img
            src="https://cdn.discordapp.com/attachments/1089995966817517618/1116464696967565322/Sasnews.png"
            alt=""
            width="200px"
          />
          <h1>SAS NewsWire</h1>
          <div className="hero">
            <div id="searchBox">
              <i
                className="fab fa-google fa-m"
                id="googleIcon"
                onclick={googleIcons}
              ></i>
              <input type="text" placeholder="Search News" />
              <i className="fas fa-microphone fa-m "></i>
            </div>
          </div>
          <select onChange={(e) => setCountry(e.target.value)}>
            <option value="tr">&#127481; &#127479;</option>
            <option value="de"> &#x1F1E9; &#x1F1EA;</option>
            <option value="fr">&#x1F1EB; &#x1F1F7;</option>
          </select>
        </StyledDiv>
        <StyledUl>
          <StyledLi>
            <Link className="li-link" to="/">
              Home
            </Link>
          </StyledLi>
          <StyledLi>
            <Link className="li-link" to="/sport">
              Sports
            </Link>
          </StyledLi>
          <StyledLi>
            <Link className="li-link" to="/entertainment">
              Entertainment
            </Link>
          </StyledLi>
          <StyledLi>
            <Link className="li-link" to="/technology">
              Technology
            </Link>
          </StyledLi>
          <StyledLi>
            <Link className="li-link" to="/politics">
              Politics
            </Link>
          </StyledLi>
        </StyledUl>
        <p className="nav-intro">
          Hello! We are SAS NewsWire, a passionate news website aiming to bring
          a different perspective to the news. Our goal is to provide our
          readers with timely and diversified news, analyze significant events,
          and share different viewpoints. As SAS NewsWire, we are committed to
          providing you, our valued readers, with high-quality and impactful
          news. We look forward to growing with you and taking news to new
          heights. Thank you, SAS NewsWire Team
        </p>
      </StyledCon>
    </StyledNav>
  );
};

export default Navbar;
