/* eslint-disable react/prop-types */
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperaturePlus, TbTemperatureMinus } from "react-icons/tb";
import { Heat, StatusWeather, Minmax } from "./styleDetailCity";

function DetailCity({ weather }) {
  return (
    <>
      <div>
        <Heat>
          {weather.result[0].degree} <TbTemperatureCelsius size="40px" />
        </Heat>
      </div>
      <div>
        <StatusWeather>{weather.result[0].status}</StatusWeather>
        <Minmax>
          <TbTemperaturePlus />
          <span>{weather.result[0].min}</span>
        </Minmax>
        <Minmax>
          <TbTemperatureMinus />
          <span>{weather.result[0].max}</span>
        </Minmax>
      </div>
    </>
  );
}

export default DetailCity;
