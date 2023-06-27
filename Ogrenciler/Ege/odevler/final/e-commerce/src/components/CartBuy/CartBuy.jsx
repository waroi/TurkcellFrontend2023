import PropTypes from "prop-types"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
const CartBuy = ({ disabled, handleBuy }) => {
    return (
        <ButtonPrimary className={`${disabled ? "disabled" : ""} mt-5`} onClick={handleBuy}>Purchase</ButtonPrimary>
    )
}
CartBuy.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleBuy: PropTypes.func.isRequired
}
export default CartBuy