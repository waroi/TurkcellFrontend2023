import StyledGuarantees from './StyledGuarantees'
import dogHeart from "../../../assets/Dog_In_Heart.svg"
import identify from "../../../assets/Identify_Pets.svg"
const Guarantees = () => {
    return (
        <StyledGuarantees className='d-flex flex-column flex-lg-row justify-content-lg-evenly align-items-center text-start my-3 py-2'>
            <span><img src={dogHeart} alt="doginheart" /> 100% health guarantee for pets</span>
            <span><img src={identify} alt="identify" /> 100% guarentee of pet identification</span>
        </StyledGuarantees>
    )
}

export default Guarantees