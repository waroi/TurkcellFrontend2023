import styled from 'styled-components';

export const Page = styled.div`
max-width: 992px;
margin: 4em auto;
.buttonsDiv{
 margin-top: 1em;
 display: flex;
 gap: 1em;
 .buttonImg{
  display: none;
 }
 .disabled{
   pointer-events: none;
 }
}
.computerSocial{
 display: none;
 margin-top: 1em;
 align-items: center;
 color: #002A48;
font-size: 14px;
font-weight: 700;
line-height: 20px;
 img{
  width: 20px;
  height: 20px;
 }
 .social{
  display: flex;
  align-items: center;
  gap: 1em;
  margin-left: 1em;
  img{
   width: 20px;
   height: 20px;
   cursor: pointer; 
  }
 }
}
.mobileSocial{
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 2em;
div{
 color: #002A48;
 font-size: 14px;
 font-weight: 700;
 line-height: 20px;
 display: flex;
 align-items: center;
 gap: .2em;
 cursor: pointer;
 img{
  width: 20px;
  height: 20px;
 }
}
 h3{
  color:  #00171F;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-top: -5px;
 }
}
@media screen and (min-width: 768px) {
 margin: 5em auto;
 .computerSocial{
 display: flex;} 
 .mobileSocial{
  display: none;
 }
}
`
export const ProductSection = styled.div`
display:grid;
grid-template-columns: 1fr;
@media screen and (min-width: 768px) {
 grid-template-columns: 1fr 1fr;
 gap: 34px;
}
`

export const ProductImages = styled.div`
overflow: hidden;
`
export const MainImg = styled.div`
 width:100%;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 height: 300px;
 overflow: hidden;
 @media screen and (min-width: 768px) {
  height: 476px;
  border-radius: 10px;
 }
 img{
  width: 100%;
  height: 100%;
  object-fit:cover;
  transition: transform 0.3s ease-in-out;
  &:hover{
   transform: scale(1.2);
   @media screen and (max-width: 768px) {    transform: unset;
   }
  }
 }
`
export const ImgSlider = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
 padding: 0 1em; 
 width: 100%;
`
export const SliderImg = styled.div`
margin-top: 1em;
width:100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
cursor: pointer;
border-radius: 4.318px;
width: 25%;
height: 20vw;
@media screen and (min-width: 768px){
 width: 100px;
 height: 100px;
 border-radius: 6px;
}
img{
 width: 100%;
 height: 100%;
 object-fit:cover;
}
`
export const ProductInfo = styled.div`
padding: 0 1em;
margin-top: 2em;
width: 100%;
overflow: hidden;
h1{
 margin-top: 1em;
 color: #00171F;
 font-size: 24px;
 font-weight: 700;
 line-height: 36px;
}
h3{
 margin-top: 1em;
 color: #002A48;
 font-size: 20px;
 font-weight: 700;
 line-height: 32px;
}
@media screen and (min-width: 768px) {
 margin-top: 0;
 padding: 0;
}
`
export const ProductInfoGrid = styled.div`
display: grid;
grid-template-columns: 1fr 5fr;
gap: 1rem;
border-bottom: 1px solid #EBEEEF;
padding: 1em 0;
@media screen and (min-width: 768px) {
 padding: 2em 0;
}
p{
 text-align: start;
 width:100%;
}
h6{
 color: #667479;
 font-size: 14px;
 font-weight: 500;
 line-height: 20px;
}
`
export const Breadcrumb = styled.div`
display: flex;
align-items: center;
a{
 color:  #667479;
 font-size: 14px;
 font-weight: 500;
 line-height: 20px;
}
p{
 font-size: 14px;
 font-weight: 500;
 line-height: 20px;
 color: #6e7679;
}
`
export const ProductCTA = styled.div`
padding: 1em 1em;
.guarantee{
 display: flex;
 flex-direction: column;
padding: 14px 12px;
align-items: flex-start;
gap: 8px;
border-radius: 10px;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
@media screen and (min-width: 768px) {
 flex-direction: row;
}
p{
 display: flex;
 align-items: center;
 gap: 8px;
 color:  #002A48;
font-size: 14px; 
font-weight: 700;
line-height: 20px;
}
}
`

export const OtherProductsSection = styled.div`
padding: 2em 1em;
@media screen and (min-width: 768px) {
 padding: 2em 0;
}
`
export const Container = styled.div`
 width: 100%;
 @media screen and (min-width: 768px) {
  max-width: 992px;
  margin: 0 auto;
 }
`

export const Flex = styled.div`
& > h2{
 color:  #003459;
font-size: 24px;
font-weight: 700;
line-height: 36px;
text-transform: capitalize;
padding: 0 0 1em 0;
}
& > h4{
color: #000;
font-size: 16px;
font-weight: 500;
line-height: 24px;
display: none;
@media screen and (min-width: 768px) {
 display: block;
}
}
 display: flex;
 width: 100%;
 flex-wrap: wrap;
 flex-direction: ${props => props.mdirection ? props.mdirection : "row"};
 justify-content: ${props => props.justify ? props.justify : "flex-start"};
 align-items: ${props => props.align ? props.align : "flex-start"};
 gap: ${props => props.gap ? props.gap : "0"};
 margin: ${props => props.margin ? props.margin : "0"};
 @media screen and (min-width: 768px) {
  flex-direction: ${props => props.direction ? props.direction : "row"};
  flex-wrap: nowrap;
 }`


export const Cards = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media screen and (min-width: 900px){
    grid-template-columns: repeat(4, 1fr);
  }
`

export const EditButton = styled.div`
width: 120px;
margin-top: 1em;
`