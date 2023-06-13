import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading';

const DetailCard = () => {

  const pokeReducer = useSelector(state => state.card);
  

  return (
    <div>
     {pokeReducer.pokeDetail == undefined || pokeReducer.pokeDetail.length == 0 ? <Loading/> : <div>
      <img src={pokeReducer.pokeDetail.sprites.front_default} alt="" />
      <div>Name: {pokeReducer.pokeDetail.name } </div>
      <div>Weight: {pokeReducer.pokeDetail.weight } </div>
      <div>Height: {pokeReducer.pokeDetail.height } </div>
      <div>Base_EXP: {pokeReducer.pokeDetail.base_experience } </div>
      <div>Form: {pokeReducer.pokeDetail.forms[0].name } </div>
     </div>
  
     
     
     }
    </div>
  )
}

export default DetailCard