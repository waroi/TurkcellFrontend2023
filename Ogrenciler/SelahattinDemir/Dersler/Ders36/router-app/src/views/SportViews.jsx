import { useParams } from "react-router-dom";

const Sport = () => {
  const { name } = useParams();
  return (
    <div>
      Sport
      <h4>{name}</h4>
    </div>
  );
};

export default Sport;
