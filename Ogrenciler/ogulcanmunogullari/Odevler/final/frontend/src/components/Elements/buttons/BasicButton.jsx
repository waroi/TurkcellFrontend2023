import styled from "styled-components"
import PropTypes from "prop-types"

export const Button = styled.div`
cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 57px;
   height: 44px;
   padding: 14px 20px 10px 20px !important;

   background-color: ${props => props.mcolor ? props.mcolor : "#003459"} !important;

   @media screen and (min-width: 768px) {

      background: ${props => props.color ? props.color : "#003459"} !important;
   }
   p{
    width: ${props => props.width ? props.width : "auto"};
    text-align: center;
    margin-top: -5px !important;

    color:  ${props => props.mtext ? props.mtext : "#fff"} !important;
    font-size: 14px;
    font-weight: 500 !important;
    
    @media screen and (min-width: 768px){
      color: ${props => props.text ? props.text : "#fff"} !important;
       font-weight: 600 !important;
      }

   }
   &:hover{
      background: ${props => props.mhover ? props.mhover : "#0078CD"} !important;

      p{
         color: ${props => props.mtext ? props.mtext : "#fff"} !important;}
         
         @media screen and (min-width: 768px) {
            background: ${props => props.hover ? props.hover : "#0078CD"} !important;
            
            p{
               color: ${props => props.text ? props.text : "#fff"} !important;
            }
            }
        
   }
`

const BasicButton = ({ children, color = null, hover = null, width = null, text = null, mtext = null, mcolor = null, mhover = null }) => {
   return (
      <Button mtext={mtext} mcolor={mcolor} mhover={mhover} color={color} hover={hover} text={text} width={width}>
         <p>
            {children}
         </p>
      </Button>
   )
}

BasicButton.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string,
   hover: PropTypes.string,
   width: PropTypes.string,
   text: PropTypes.string,
   mtext: PropTypes.string,
   mcolor: PropTypes.string,
   mhover: PropTypes.string,
}



export default BasicButton