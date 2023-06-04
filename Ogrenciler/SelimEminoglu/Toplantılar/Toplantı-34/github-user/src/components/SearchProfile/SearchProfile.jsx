function SearchProfile({ name, picture, follower, following }) {
  return (
    <div>
      <div className="profilePicture">
        <img src={picture} alt="images" />
      </div>
      <div className="profileState">
        <h1>{name}</h1>
        <h3>Takipçiler</h3>
        <p>{follower}</p>
        <h3>Takip Edilen</h3>
        <p>{following}</p>
      </div>
    </div>
  );
}

export default SearchProfile;
