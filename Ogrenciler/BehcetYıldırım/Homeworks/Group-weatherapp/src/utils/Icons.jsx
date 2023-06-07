/* eslint-disable react/prop-types */
import { Icon } from "react-icons-kit";
import { ic_device_thermostat } from "react-icons-kit/md/ic_device_thermostat";
import { moon } from "react-icons-kit/iconic/moon";
import { water } from "react-icons-kit/entypo/water";
import { ic_trending_down } from "react-icons-kit/md/ic_trending_down";
import { ic_trending_up } from "react-icons-kit/md/ic_trending_up";

export const Thermo = ({ color, size }) => (
  <span style={{ color: `${color}` }}>
    <Icon size={size} icon={ic_device_thermostat} />
  </span>
);
export const Night = ({ color, size }) => (
  <span style={{ color: `${color}` }}>
    <Icon size={size} icon={moon} />
  </span>
);
export const Humidity = ({ color, size }) => (
  <span style={{ color: `${color}` }}>
    <Icon size={size} icon={water} />
  </span>
);
export const Max = ({ color, size }) => (
  <span style={{ color: `${color}` }}>
    <Icon size={size} icon={ic_trending_up} />
  </span>
);
export const Min = ({ color, size }) => (
  <span style={{ color: `${color}` }}>
    <Icon size={size} icon={ic_trending_down} />
  </span>
);
