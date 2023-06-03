import "./Card.css";

function Card(props) {
  return (
    <div className="card" id={props.id}>
      <div className="card-image">
        <img src={props.src} alt="images" />
      </div>
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
