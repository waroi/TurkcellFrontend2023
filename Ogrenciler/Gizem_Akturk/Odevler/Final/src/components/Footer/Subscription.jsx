export function Subscription() {
  return (
    <div className="container subscription">
      <div className="row w-100">
        <div className="col-md-6 align-items-center d-flex justify-content-center">
          <h5>Subscribe to our newsletter</h5>
        </div>
        <div className="col-md-6 align-items-center d-flex h-100">
          <div id="subs" className="input-group  bg-light">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="button-addon2" />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
