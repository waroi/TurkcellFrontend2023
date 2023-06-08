import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
`;



export const Card = styled.div`
  align-self: flex-start;
  position: relative;
  width: 325px;
  min-width: 275px;
  margin: 1.25rem 0.75rem;
  background: white;
  transition: all 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 15px 35px rgba(227, 252, 239, 0.1),
      0px 5px 15px rgba(0, 0, 0, 0.07);
    transform: scale(1.025);

    .card-img-hovered {
      --card-img-hovered-overlay: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.65)
      );
      height: 100%;
    }

    .card-about,
    .card-creator {
      opacity: 0;
    }

    .card-info {
      background-color: transparent;
    }

    .card-title {
      color: #ebecf0;
      transform: translate(0, 40px);
    }
  }
`;



export const CardImage = styled.div`
  visibility: hidden;
  width: 100%;
  height: var(--card-img-height);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;



export const CardImageHovered = styled.div`
  --card-img-hovered-overlay: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  transition: all 350ms ease-in-out;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  position: absolute;
  height: var(--card-img-height);
  top: 0;

  ${({ backgroundImage }) => `
    background-image: var(--card-img-hovered-overlay), url(${backgroundImage});
  `}
`;



export const CardInfo = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  transition: all 200ms ease-in-out;
`;



export const CardAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  transition: all 200ms ease-in-out;
`;



export const CardTag = styled.a`
  width: 60px;
  max-width: 100px;
  padding: 0.2rem 0.5rem;
  font-size: 12px;
  text-align: center;
`;

export const CardTitle = styled.h1`
 z-index: 10;
font-size:1.5rem;
padding-bottom: 0.75rem;
 transition: all 350ms ease-in-out;
 `;


export const CardCreator = styled.div`
 padding-bottom: 0.75rem; 
 transition: all 250ms ease-in-out;
 `;