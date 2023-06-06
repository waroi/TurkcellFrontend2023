import { ListImg, ListUl, ListLi } from "./styleWeeklyWeather";
import { TbTemperatureCelsius } from "react-icons/tb";

function WeeklyWeather({ weather }) {
  return (
    <ListUl>
      {weather.result.map((item, i) => {
        return (
          <ListLi key={i}>
            <ListImg src={item.icon} alt="images" />
            <p>
              {item.degree}
              <TbTemperatureCelsius />
            </p>
            <p>{item.day}</p>
          </ListLi>
        );
      })}
    </ListUl>
  );
}

export default WeeklyWeather;
