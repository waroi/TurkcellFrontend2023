/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { WheatherContainer, IconImg, WheatherInfo, Title } from "./wheatherStyle.js"

const WheatherWrap = ({wheather}) => {


  return (
    <WheatherContainer>
        <WheatherInfo >
            {/* {wheather?.weather?.length>0&& <IconImg src={`/assets/01d.svg`} alt='sun' />} */}
            {wheather?.weather?.length>0&& <IconImg src={`./assets/${wheather?.weather[0]?.icon}.svg`} alt='sun' />}
        </WheatherInfo>
        <WheatherInfo >
            <h1>{wheather?.name}</h1>
            {wheather?.weather?.length>0 &&<Title>{wheather?.weather[0]?.description}</Title>}
            <h4>25C</h4>
        </WheatherInfo>

    </WheatherContainer>
  )
}

export default WheatherWrap