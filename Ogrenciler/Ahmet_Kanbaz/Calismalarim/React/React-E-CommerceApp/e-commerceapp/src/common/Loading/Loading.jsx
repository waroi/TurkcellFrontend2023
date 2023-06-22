const Loading = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
