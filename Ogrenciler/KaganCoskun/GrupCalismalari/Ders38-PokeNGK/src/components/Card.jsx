/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import CardDetail from "./CardDetail";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedCaracter, getList, setSelectedCaracter} from "../redux/Slices/pokemon";


const CardContainer = styled.div`
  width: 150px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ flip }) => (flip ? `rotateY(180deg)` : `rotateY(0deg)`)};
  pointer-events: ${({ disable }) => (disable ? `none` : `auto`)};
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

const Card = ({ character }) => {
  const pokemon = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const [isFlipped, setFlipped] = useState(false);
  const [isCharSelected, setIsCharSelected] = useState(false);

  const handleCardClick = () => {
    dispatch(setSelectedCaracter(character?.name));
    setFlipped(!isFlipped);
    setIsCharSelected(true);
  };

  if (isFlipped && pokemon?.selectedCaracter.length === 2) {
    if (pokemon?.selectedCaracter[0] !== pokemon?.selectedCaracter[1]) {
      setFlipped(false);
      setIsCharSelected(false);
    } else {
      // isCharSelected(true); // Bu satırı kaldırın
    }
    dispatch(clearSelectedCaracter());

  }

  return (
    <CardContainer flip={isFlipped} onClick={handleCardClick} disable={isCharSelected}>
      <CardFront flip={isFlipped}>
        <CardContent>
          <h2>Pokemon</h2>
          <img style={{ maxWidth: "30%" }} src="https://cdn.discordapp.com/attachments/1089995439467679856/1118261863541653564/528101.png" alt="" />
        </CardContent>
      </CardFront>
      <CardBack flip={isFlipped}>
        <CardContent>
          <CardDetail character={character} />
        </CardContent>
      </CardBack>
    </CardContainer>
  );
};

export default Card;

