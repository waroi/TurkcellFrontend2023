import { useDispatch, useSelector } from "react-redux"
import { getList, setList } from "../redux/Slices/pokemon";
import { useEffect } from "react";
import Card from "../components/Card";
import { getCards } from "../Services/requests";

import {GridContainer} from "./styledHomeView"
const HomeView = () => {
  const characters =  useSelector((state)=>state.character.characters);

  console.log(characters)
  
  const dispatch = useDispatch();

useEffect(()=>{
  getCards().then((data)=>dispatch(setList(data)));
},[])

  return (
    <div>
      <GridContainer>
      {characters?.map((character,index)=><Card key={index} character={character}/> )}
      </GridContainer>
    </div>
  )
}

export default HomeView