import PropTypes from "prop-types"

const CartItem = ({ cartItem }) => {
    return (
        <p>{cartItem.title} - {cartItem.demand}</p>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
}

export default CartItem