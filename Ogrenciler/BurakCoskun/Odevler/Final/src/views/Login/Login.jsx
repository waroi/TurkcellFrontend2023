import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="AuthPages pt-5">
      <div className="auth-bg row mt-5 align-items-center text-white g-0">
        <div className="col-lg-5 d-none d-lg-block">
          <div className="container p-5 my-5">
            <h1 className="fw-bold mb-3">Login</h1>
            <p className="fw-bold">
              Unlock exclusive features and personalized benefits by logging
              into your account. Access your order history, track shipments, and
              manage your preferences. Discover exciting promotions,
              limited-time offers, and member-only discounts. Stay updated with
              the latest trends, new arrivals, and product recommendations.
              Connect with a community of like-minded shoppers and share your
              experiences. Login now and embark on a seamless shopping journey
              tailored just for you.
            </p>
          </div>
        </div>
        <div className="col-lg-7 col-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
