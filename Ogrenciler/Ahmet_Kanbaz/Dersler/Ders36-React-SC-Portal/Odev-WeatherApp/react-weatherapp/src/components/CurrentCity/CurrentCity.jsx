// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// const CurrentCity = ({ getWeatherDatas }) => {
//   const [location, setLocation] = useState({ lat: null, long: null });
//   /* useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLocation({
//         lat: position.coords.latitude,
//         long: position.coords.longitude,
//       });
//       location.lat ? (location.long ? getWeatherDatas(location) : null) : null;
//     });
//   }, [location]);*/
//   return (
//     <div>
//       {location && (
//         <p>
//           Current City: {location.lat}, {location.long}
//         </p>
//       )}
//     </div>
//   );
// };

// CurrentCity.propTypes = {
//   getWeatherDatas: PropTypes.func.isRequired,
// };

// export default CurrentCity;
