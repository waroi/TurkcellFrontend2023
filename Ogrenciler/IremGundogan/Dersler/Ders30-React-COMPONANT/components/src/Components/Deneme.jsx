import React from "react";
import second from "prop-types";
const Deneme = ({ isim, surname, age }) => {
  return (
    <div>
      Merhaba {isim} {surname},{age}
    </div>
  );
};
Deneme.protoTypes = { isim: ProtoTypes.string.isRequired
surname:ProtoTypes };
export default Deneme;
