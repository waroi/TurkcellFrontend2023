const NotFound = () => {
  return (
    <div id="notfound" className="h-100 w-100 container d-flex flex-column">
      <img src="/404.jpg" alt="" />
      <a href="/" className="btn btn-primary mt-5 mx-auto">
        Go Back
      </a>
    </div>
  );
};

export default NotFound;
