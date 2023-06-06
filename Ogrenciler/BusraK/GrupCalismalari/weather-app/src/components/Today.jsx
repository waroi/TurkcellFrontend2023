import React from "react";

import pressure from "../assets/react.svg";
import wind_speed from "../assets/react.svg";
import humidity from "../assets/react.svg";
import sunrise from "../assets/react.svg";
import sunset from "../assets/react.svg";

function Today({ today }) {
  return (
    <div>
      <div>
        <div>
          <img
            src={`https://openweathermap.org/img/w/${today.icon}.png`}
            alt={today.icon}
          />
          <div>{today.temp}°C</div>
          <div>
            {today.main}, {today.desc}
          </div>
        </div>
        <div>
          <div>
            <img src={sunrise} alt="Logo" /> {today.sunrise} A.M.
          </div>
          <div>
            <img src={sunset} alt="Logo" /> {today.sunset} P.M.
          </div>
        </div>
      </div>
      <div>
        <img src={pressure} alt="Logo" />
        <span>{today.pressure} hPa</span>
        <img src={humidity} alt="Logo" />
        <span>{today.humidity} %</span>
        <img src={wind_speed} alt="Logo" />
        <span>{today.wind} m/s N</span>
      </div>
    </div>
  );
}

export default Today;
