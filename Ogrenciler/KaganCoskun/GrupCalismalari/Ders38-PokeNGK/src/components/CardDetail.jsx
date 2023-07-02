import React, { useEffect, useState } from "react";
import { getCardDetail } from "../Services/requests";

const CardDetail = ({ character }) => {
  const [cardDetail, setCardDetail] = useState();

  useEffect(() => {
    getCardDetail(character.name).then((response) => setCardDetail(response));
  }, []);

  return (
    <div>
      <h3 style={{textAlign:"center"}}>  {cardDetail?.name} </h3>
      <img src={cardDetail?.sprites?.front_default} alt="" />
    
    </div>
  );
};

export default CardDetail;
