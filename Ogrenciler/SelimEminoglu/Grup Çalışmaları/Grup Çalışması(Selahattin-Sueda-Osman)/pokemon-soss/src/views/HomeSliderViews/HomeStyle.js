import styled from "styled-components";

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  margin-top: 50px;
`;

export const Box = styled.div`
  background-image: url("https://images-ext-2.discordapp.net/external/w5jf4kbAIplKfPIgXGooJbK7nMi5m8HRh5t68iEztMI/https/img.freepik.com/premium-photo/abstract-blurred-gradient-nature-wallpaper-backgroundsoft-background-wallpaperdesigngraphic-presentation_532332-1415.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.114);
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    img {
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;

export const İmgContainer = styled.div`
  width: 200px;
  height: 280px;
  margin: 0 auto;
`;

export const İmage = styled.img`
  width: 100%;
  margin-top: 20px;
  height: auto;
`;
