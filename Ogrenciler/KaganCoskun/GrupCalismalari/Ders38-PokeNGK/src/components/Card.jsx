import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import CardDetail from "./CardDetail";

const CardContainer = styled.div`
  width: 150px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ flip }) => (flip ? `rotateY(180deg)` : `rotateY(0deg)`)};
`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  visibility: ${({ flip }) => (flip ? `hidden` : `visible`)};
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  visibility: ${({ flip }) => (flip ? `visible` : `hidden`)};
  transform: rotateY(180deg);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const Card = ({character}) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <CardContainer flip={isFlipped} onClick={handleCardClick}>
      <CardFront flip={isFlipped}>
        <CardContent>
          <h2>Pokemon</h2>      
          <img style={{maxWidth:"30%"}} src="https://cdn.discordapp.com/attachments/1089995439467679856/1118261863541653564/528101.png" alt="" />   
        </CardContent>
      </CardFront>
      <CardBack flip={isFlipped}>
        <CardContent>
          {/* <h3>{character.name}</h3>      */}
          <CardDetail character={character} />   
        </CardContent>
      </CardBack>
    </CardContainer>
  );
};

export default Card;
