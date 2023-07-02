import LogInForm from "../components/LogInForm";

const LogInView = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="text-center">
          <h2>Log In</h2>
          <h5>It's quick and easy</h5>
        </div>
      </div>
      <LogInForm />
    </div>
  );
};

export default LogInView;
