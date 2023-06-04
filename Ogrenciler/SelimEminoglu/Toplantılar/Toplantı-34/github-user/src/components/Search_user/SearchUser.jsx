import React, { useState } from "react";
import UserStyle from "./SearchUser.module.css";

function SearchUser({ getUserInfo }) {
  const [user, setUser] = useState("");

  const takeValue = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={UserStyle.formStyle}>
      <input
        type="text"
        placeholder="Kullanıcı Adı Girin"
        onChange={takeValue}
        value={user}
        className={`${UserStyle.formInput} form-control`}
      />
      <button
        className={UserStyle.formButton}
        type="submit"
        onClick={() => {
          getUserInfo(user);
          setUser("");
        }}
      >
        Kullanıcı Ara
      </button>
    </form>
  );
}

export default SearchUser;
