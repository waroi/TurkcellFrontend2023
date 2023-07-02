import PropTypes from "prop-types"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
const CartBuy = ({ handleBuy }) => {
    return (
        <ButtonPrimary className="mt-3" onClick={handleBuy}>Purchase</ButtonPrimary>
    )
}
CartBuy.propTypes = {
    handleBuy: PropTypes.func.isRequired
}
export default CartBuy