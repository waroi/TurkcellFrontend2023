import SignupForm from "../../components/SignupForm/SignupForm";

const Signup = () => {
  return (
    <div className="AuthPages pt-5">
      <div className="auth-bg row mt-5 align-items-center text-white g-0">
        <div className="col-lg-5  d-none d-lg-block">
          <div className="container p-5 my-5">
            <h1 className="fw-bold mb-3">Signup</h1>
            <p className="fw-bold">
              Become a member and experience a world of convenience and rewards.
              Enjoy a hassle-free shopping experience with quick and easy
              registration. Access special privileges, exclusive discounts, and
              early access to sales. Receive personalized recommendations based
              on your preferences and interests. Stay informed about the latest
              trends, new arrivals, and exciting promotions. Join our community
              today and unlock a world of possibilities. Start shopping now!
            </p>
          </div>
        </div>
        <div className="col-lg-7 ">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
