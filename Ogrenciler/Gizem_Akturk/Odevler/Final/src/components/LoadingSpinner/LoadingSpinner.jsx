import loading from "../../assets/loading.svg";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src={loading} alt="Loading..." width={15} height={15}/>
    </div>
  );
};

export default LoadingSpinner;
