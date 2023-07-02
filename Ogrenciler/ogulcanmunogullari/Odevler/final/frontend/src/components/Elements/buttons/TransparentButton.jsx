import styled from "styled-components"
import PropTypes from "prop-types"
import play from "../../../assets/play.svg"
export const Button = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 57px;
   border: 1.5px solid ${props => props.bcolor ? props.bcolor : "#003459"};
   height: 44px;
   padding: 14px 28px 20px 28px;
   .buttonImg{
   border: 1px solid #003459;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   margin-top: 5px !important;
  }
   p{
    margin-top: 5px !important;
    margin-right: -5px;
    color: ${props => props.bcolor ? props.bcolor : "#003459"};
    font-weight: 500 !important;
    font-size: 14px !important;
    @media screen and (min-width: 768px){
     font-size: 16px;
     font-weight: 600 !important;
     &:hover{
      color: ${props => props.hover ? props.hover : "#0078CD"};
     }
    }
   }
    &:hover{
    border-color: ${props => props.hover ? props.hover : "#0078CD"};
    p{
     color:  ${props => props.hover ? props.hover : "#0078CD !important"};
    }
    .buttonImg{
     border-color: ${props => props.hover ? props.hover : "#0078CD"};
     clip-path: fill-box;
     fill: ${props => props.hover ? props.hover : "#0078CD"};
    }
   }
`

const TransparentButton = ({ children, bcolor = null, hover = null }) => {
   return (
      <Button bcolor={bcolor} hover={hover}>
         <p>
            {children}
         </p>
         <div className="buttonImg">
            <img src={play} alt="button image" />
         </div>
      </Button>
   )
}

TransparentButton.propTypes = {
   children: PropTypes.node.isRequired,
   bcolor: PropTypes.string,
   hover: PropTypes.string
}



export default TransparentButton