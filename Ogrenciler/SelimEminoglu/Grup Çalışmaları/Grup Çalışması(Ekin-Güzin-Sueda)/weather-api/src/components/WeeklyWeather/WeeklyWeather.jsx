/* eslint-disable react/prop-types */
import { ListImg, ListUl, ListLi, WeeklyTemp } from "./styleWeeklyWeather";
import { TbTemperatureCelsius } from "react-icons/tb";

function WeeklyWeather({ weather }) {
  return (
    <ListUl>
      {weather.result.map((item, i) => {
        return (
          <ListLi key={i}>
            <ListImg src={item.icon} alt="images" />
            <WeeklyTemp>
              {item.degree}
              <TbTemperatureCelsius size="20px" />
            </WeeklyTemp>
            <p>{item.day}</p>
          </ListLi>
        );
      })}
    </ListUl>
  );
}

export default WeeklyWeather;
