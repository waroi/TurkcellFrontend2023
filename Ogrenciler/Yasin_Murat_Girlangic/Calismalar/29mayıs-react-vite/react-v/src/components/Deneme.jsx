import PropTypes from "prop-types";

const Deneme = ({isim}) => {
    return (
        <div>
            <h1>Merhaba {isim}</h1>
        </div>
    )
}

Deneme.propTypes = {
    isim: PropTypes.string.isRequired
}


export default Deneme;