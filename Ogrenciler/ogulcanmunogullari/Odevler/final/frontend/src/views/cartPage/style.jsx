import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
`

export const CartDiv = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns: 1fr;
  padding: 0 .5em;
  @media screen and (min-width: 768px){
   gap: 5em;
   margin: 0 auto;
   max-width: 992px;
   grid-template-columns: 1fr auto;
  }
`
export const GoBack = styled.div`
  width: 150px;
  padding: 1em 0;
  margin-left: 1em;
  p{
   display: flex;
   align-items: center;
   flex-direction: row;
  }
cursor: pointer;
`
export const ProductsDiv = styled.div`
width: 100%;
overflow: hidden;
`
export const ItemDiv = styled.div`
 display: grid;
 grid-template-columns: 1fr 150px 60px;
 margin-top: 1em;
 padding: .5em 0;
 border-bottom: 1px solid black;
`

export const QuantityDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: .5em;
width: 150px;
`

export const QuantityButton1 = styled.div`
width: 30px;
height: 30px;
border: 1px solid black;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
pointer-events: ${props => !props.disabled1 ? "none" : "auto"};
cursor: pointer;
&:hover{
 background-color: #e6e6e6;
}
`
export const QuantityButton2 = styled(QuantityButton1)`
pointer-events: ${props => !props.disabled2 ? "none" : "auto"};
`


export const PriceDiv = styled.div`
display: flex;
overflow: hidden;
align-items: center;
justify-content: flex-end;
width: 60px;
font-weight: 500;
margin-top: -4px;
span{
 margin-top: 3px;
 font-weight: normal;
 font-size: 0.9em;
}
`
export const TotalPrice = styled(PriceDiv)`
margin-top: 0;
font-size: 1.2em;
width: 100%;
`

export const OtherSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
padding: 1em 0;
gap: .5em;
@media screen and (min-width: 768px) {
 align-items: flex-end;
 justify-content: flex-start;
}
`

export const ConfirmationDiv = styled.div`
height: 45px;
`

export const Confirmation = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
gap: .5em;
font-size: 1.2em;
`