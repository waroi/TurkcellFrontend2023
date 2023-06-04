import React from "react";

const Followers = ({ followers }) => {
  return (
    <div>
      {followers.map((followers) => (
        <div key={followers.id}>
          <h3>{followers.login}</h3>
          <img src={followers.avatar_url} />
        </div>
      ))}
    </div>
  );
};

export default Followers;
