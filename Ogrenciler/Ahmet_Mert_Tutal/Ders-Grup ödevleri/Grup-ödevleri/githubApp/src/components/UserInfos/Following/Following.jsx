import React from "react";

const Following = ({ following }) => {
  return (
    <div>
      {following.map((following) => (
        <div key={following.id}>
          <h3>{following.login}</h3>
          <img src={following.avatar_url} />
        </div>
      ))}
    </div>
  );
};

export default Following;
