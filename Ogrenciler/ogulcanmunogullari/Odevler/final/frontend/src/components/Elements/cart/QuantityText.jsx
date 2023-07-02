import { useState } from 'react'
import BasicInput from '../inputs/BasicInput'
import PropTypes from 'prop-types'
import { changeQuantity } from '../../../redux/Slicers/userSlice'
import { useDispatch } from 'react-redux'
import { FormDiv } from './quantityTextStyle'

const QuantityText = ({ handleChange, item }) => {
 const [manual, setManual] = useState(false)
 const [quantity, setQuantity] = useState(null)
 const dispatch = useDispatch()

 const handleManual = () => {
  setManual(true)
  setQuantity(item.quantity)
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  setManual(false)
  if (quantity == item.quantity) return
  dispatch(changeQuantity({ id: item.id, quantity }))
  handleChange({ id: item.id, quantity })
 }

 return (
  <FormDiv onSubmit={handleSubmit} onClick={handleManual}>
   {
    !manual && item.quantity
   }
   {manual && <BasicInput>
    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
   </BasicInput>}
  </FormDiv>
 )
}

QuantityText.propTypes = {
 item: PropTypes.object.isRequired,
 handleChange: PropTypes.func.isRequired
}

export default QuantityText