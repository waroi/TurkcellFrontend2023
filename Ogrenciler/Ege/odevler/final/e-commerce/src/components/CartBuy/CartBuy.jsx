import PropTypes from "prop-types"
const CartBuy = ({ disabled, handleBuy }) => {
    return (
        <button className={`${disabled ? "disabled" : ""} btn btn-success`} onClick={handleBuy}>CartBuy</button>
    )
}
CartBuy.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleBuy: PropTypes.func.isRequired
}
export default CartBuy