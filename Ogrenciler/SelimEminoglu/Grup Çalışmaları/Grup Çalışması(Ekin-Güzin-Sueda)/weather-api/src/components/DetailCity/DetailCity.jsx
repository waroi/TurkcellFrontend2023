/* eslint-disable react/prop-types */
import { FaTemperatureHigh } from "react-icons/fa";
import { DegreeFlex } from "./styleDetailCity";


function DetailCity({ weather }) {
  console.log(weather);
  return (
    <>
      <div>
        <h1><FaTemperatureHigh />{weather.result[0].degree}</h1>
      </div>
      <div className="detailDiv">
        <p>
          {weather.result[0].status}
        </p>
        <p>Min:<span>
          {weather.result[0].min}
        </span></p>
        <p>Max:
          <span>{weather.result[0].max}</span>
        </p>
      </div>

    </>

  );
}

export default DetailCity;
