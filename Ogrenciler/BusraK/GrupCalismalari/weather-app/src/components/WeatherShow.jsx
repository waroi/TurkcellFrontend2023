import LocalInfo from "./LocalInfo";
import Today from "./Today";
import Weekly from "./Weekly";

const WeatherShow = ({ today, weekly }) => {
  return (
    <div>
      <LocalInfo today={today} />

      <Today today={today} />

      <Weekly weekData={weekly} />
    </div>
  );
};
export default WeatherShow;
