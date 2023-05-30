import React from 'react'
import PropTypes from 'prop-types';

const Deneme = ({ name, surname, age }) => {
    return (
        <div>Merhaba{name} {surname}, {age} yaşındasın</div>
    )
}

Deneme.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

Deneme.defaultProps = {
    name: "Wrong name",
    surname: "Wrong surname",
    age: 20,
}

export default Deneme