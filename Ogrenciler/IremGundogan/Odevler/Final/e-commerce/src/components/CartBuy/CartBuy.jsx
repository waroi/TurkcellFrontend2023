import PropTypes from "prop-types"
import ButtonStyle from "../Button/ButtonStyle"


const CartBuy = ({ disabled, handleBuy }) => {
    return (
      <ButtonStyle
        className={`${disabled ? "disabled d-none" : ""} btn border border-primary `}
        onClick={handleBuy}
        >
        Checkout
      </ButtonStyle>
    );
}
CartBuy.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleBuy: PropTypes.func.isRequired
}
export default CartBuy