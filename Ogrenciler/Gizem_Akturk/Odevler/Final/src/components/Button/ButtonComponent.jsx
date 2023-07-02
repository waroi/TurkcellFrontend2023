import PropTypes from 'prop-types';
import './Button.scss';

const ButtonComponent = ({title, link, filled = true, outline= false, onclick = null}) => {
  return (
    <div className="button">
      {onclick && <button className={`btn ${filled ? "btn-primary" : "btn"}`} onClick={onclick}>{title}</button>}
      {!onclick && <a href={"/" + link} className={filled  ? outline ? "btn btn-outline-primary" : "btn btn-primary" : outline ? "btn btn-outline": "btn"}>
        {title}
      </a>}
    </div>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  filled: PropTypes.bool,
  outline: PropTypes.bool,
  onclick: PropTypes.func
}

export default ButtonComponent;
