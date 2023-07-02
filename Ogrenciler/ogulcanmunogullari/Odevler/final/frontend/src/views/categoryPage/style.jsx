import styled from 'styled-components';


export const PageContainer = styled.div`
 margin-top: 4em;
@media screen and (min-width: 768px) {
 margin: 0 auto;
 margin-top: 5em;
 max-width: 992px;
}
`
export const Banner = styled.div``
export const BannerBox = styled.div``

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

export const SortingContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row-reverse;
align-items: center;
padding: 1em;
h3{
 display: flex;
 align-items: center;
 .mobileIcon{
   display: inline-block;
   margin-bottom: -5px;
  }
  cursor: pointer;
}
color: #002A48;
font-size: 16px;
font-weight: 700;
line-height: 24px;
@media screen and (min-width: 768px) {
 h3{
  .mobileIcon{
   display: none;
  }
  cursor: default;
  color: #003459;
  font-size: 24px;
  line-height: 36px;
 }
 padding: 1em 0;
 flex-direction: row;
}
`

export const Sorting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  select{
    cursor: pointer;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   border: none;
   outline: none;
   padding: 10px 10px 10px 20px;
  border-radius: 20px;
  border: 1px solid  #CCD1D2;
  }
  option{
   color: #00171F;
   font-size: 14px;
   font-weight: 500;
   line-height: 20px;
   outline: none;
  }
`

export const MainDiv = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1em;
  position: relative;
  .cardDiv{
   display: flex;
   width: 100%;
   justify-content: center;
  }
  @media screen and (min-width: 768px) {
   padding: 0;
   grid-template-columns: auto 1fr;
   gap: 20px;
  }
`
export const FilterContainer = styled.div`
  display: ${props => props.display === "true" ? "flex" : "none"};
   flex-direction: column;
   gap: 20px;

  position: absolute;
  top: -10px;
  right: 10px;
  background: #fff;
  z-index: 10;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
   display: flex;
   flex-direction: column;
   gap: 20px;

   position: relative;
   top: unset;
   right: unset;
   background: unset;
   box-shadow: unset;
   padding: 0;
   border-radius: 0;

   h3{
   color:  #00171F;
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
 }
 label{
  color:  #00171F;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
 }
  }
`
export const PriceItemDiv = styled.div`
 
`
export const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  div{
   width: 80px;
   padding: 10px;
   border-bottom: 1px solid #CCD1D2;
   input{
     width: 80px;
     border:none;
     outline: none;  
     }
  }
`


export const CategoryItemDiv = styled.div``
export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`

export const RatingItemDiv = styled(CategoryItemDiv)``
export const RatingItem = styled(CategoryItem)``

export const SearchDiv = styled(CategoryItemDiv)`
  input{
   width: 100%;
   border: 1px solid #CCD1D2;
   border-radius: 10px;
   padding: 10px;
   outline: none;
   margin-top: 1em;
  }
`

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
  @media screen and (min-width: 768px) {
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px;
 } 
`

export const CallToAction = styled.div`
margin-top: 1em;
position: relative;
z-index: 0;
border-radius: 20px;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
overflow: hidden;
width: 100%;
`

export const CallToActionBox = styled.div`
position: absolute;
z-index: 1;
top: -150px;
right: -100px;
width: 600px;
height: 799.52px;
transform: rotate(-110.219deg);
border-radius: 99px;
background:  #002A48;
@media screen and (max-width: 768px) {
  top: 310px;
  right: -100px;
  width: 600px;
  height: 799.52px;
  transform: rotate(-175deg);
}
`

export const Flex = styled.div`
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
 }
`

export const CallToActionSection = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1.5em;
  padding-right: 4em;
  @media screen and (max-width: 768px) {
    padding: 0;
    padding: 0 1em;
  }
  .ctaButtonSection{
    width: 100%;
  }
  .ctaButton{
    p{
      width: 65px;
      margin-right: 10px;
      color: #FDFDFD;
      @media screen and (max-width: 768px) {
        color: #003459;
      }
    }
    div{
      @media screen and (max-width: 768px) {
        border-color: #003459;
      }
    }
    .buttonImg{
      border-color: #FDFDFD;
      background-color: #FDFDFD;
      @media screen  and (max-width: 768px){
        border-color: #003459;
        background-color: unset;
      }
    }
    &:hover{
      div{
        @media screen and (max-width: 768px) {
          border-color: #0078CD;
        }
      }
      p{
        color: #cacaca;
        @media screen and (max-width: 768px) {
          color: #0078CD;
          
        }
      }
      .buttonImg{
        background-color: #cacaca;
        border-color: #cacaca;
        @media screen and (max-width: 768px) {
          background-color: unset;
          border-color: #0078CD;
        }
      }
    }
  }
.ctaTexts{
  margin-top: 2em;
  position: relative;
  z-index: 10;
  h2{
    color:  #FDFDFD;
    text-transform: capitalize;
    width: 100%;
    text-align: right;
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
  }
  h3{
    width: 100%;
    color:  #FDFDFD;
    text-align: right;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-transform: capitalize;
  }
  &>p{
    color:#CCD1D2;
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
  @media screen and (max-width: 768px) {
    z-index: 10;
    &>p{
      color:#002A48;
      text-align: left;
    }
    h2{
      text-align: left;
      color:#002A48;
      font-size: 32px;
      font-weight: 800;
    }
    h3{
      text-align: left;
      color:#002A48;
      font-size: 24px;
    }
  }
}

`

export const CallToActionSection2 = styled.section`
  position: relative;
  z-index: 10;
  img{
    position: relative;
    z-index: 10;
    bottom: -35px;
    transform: scale(0.8);
    @media screen and (max-width: 768px) {
      bottom: -10px;
      width: 100%;
      transform: scale(1.1);
    }
  }

`