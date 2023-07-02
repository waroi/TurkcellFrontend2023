import styled from 'styled-components';

export const HeaderBG = styled.div`
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
border-radius: 0 0 20px 20px;
overflow: hidden;
@media screen and (min-width: 768px) {
 padding-top: 125px;
}
`

export const Header = styled.header`
width: 100%;
.sec1{
 overflow: hidden;
 position: relative;
 z-index: 10;
 padding: 0 1em;
 @media screen and (min-width: 768px){
  overflow: visible;
 }
 h1{
  color:  #002A48;
  font-size: 46px;
  font-weight: 800;
  line-height: 60px;
  text-transform: capitalize;
  margin-top: 75px;
 }

 h2{
  color:  #002A48;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  text-transform: capitalize;
 }
 p{
  margin-top: 12px;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-shrink: 0; 
  color:  #242B33;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
 }

}
.sec2{
 position: relative;
 z-index: 10;
 overflow: hidden;
 display: flex;
 width: 100%;
 @media screen and (min-width: 768px){
  overflow: visible;
 }
 img{
  position: relative;
  z-index: 10;
  margin-bottom: -5px;
  left: -20px;
  @media screen and (min-width: 768px){
   left: 100px;
   transform:scale(1.3);
  }
 }
}
`
export const MarginDiv = styled.div`
 @media screen and (min-width: 768px) {
  margin-top: -50px;
 }
`
export const Box1 = styled.div`
border-radius: 61px;
background:  #F7DBA7;
width: 635px;
height: 635px;
transform: rotate(19.424deg);
position: absolute;
top: -630px;
right: 48px;
z-index: 0;
@media screen and (min-width: 768px) {
 top: -730px;
 right: 200px;
}
`

export const Box2 = styled.div`
 border-radius: 48px;
 background:  #003459;
 width: 528px;
 height: 528px;
 transform: rotate(5.367deg);
 position: absolute;
 top: 120px;
 left: 32px;
 z-index: 0;
 @media screen and (min-width: 768px) {
  top: 130px;
}
`

export const Box3 = styled.div`
width: 528.983px;
height: 528.983px;
transform: rotate(25.23deg);
border-radius: 48px;
background:  #F7DBA7;
position: absolute;
 top: 80px;
 left: 80px;
 z-index: 5;
`

export const Container = styled.div`
 width: 100%;
 @media screen and (min-width: 768px) {
  max-width: 992px;
  margin: 0 auto;
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



 .prodHeader1{

  color: #000;
font-size: 14px;
font-weight: 500;
line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
}
.prodHeader2{

  color: #003459;
font-size: 20px;
font-weight: 700;
line-height: 32px;
text-transform: capitalize;
  
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 36px;
    }

  }
`

export const Main = styled.section`
margin-top: 40px;
  padding: 0 1em;
  h4{
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
  h2{
    color:  #003459;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    text-transform: capitalize;
  }
  .onlyComputer{
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
      margin-top: -1px;
      p{
      margin-right: 12px;
    }
    .buttonImg{
      border:none;
    }
    }
  }
  .onlyMobile{
    margin-top: 1em;
    flex:1;
    width: 100%;
    p{
      margin-right: 12px;
    }
    .buttonImg{
      border:none;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`
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

export const Blogs = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;

  .blogItem{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 8px;

    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  }
  .image_Div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .button{
    width: 115px;
    pointer-events: none;
    margin-left: 8px;
    margin-top: 8px;
    div{
      all: unset;
      display: flex;
      width: 100%;
      padding: 2px 10px;
      border-radius: 28px;  
      p{
        all: unset;
      }
    }
  }
  .info{
    padding: 8px;
    h3{
      color:  #00171F;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    p{
      overflow: hidden;
      color:  #242B33;
      text-overflow: ellipsis;
      line-clamp: 3;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }

  }


  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media screen and (min-width: 900px){
    grid-template-columns: repeat(3, 1fr);
  }
`


export const CallToAction = styled.section`
margin-top: 2em;
position: relative;
z-index: 0;
border-radius: 20px;
background: #003459;
overflow: hidden;
width: 100%;
`
export const Section3 = styled.section`
  position: relative;
  width: 100%;
  z-index: 10;
  padding: 0 1em;
  .ctaButtonSection{
    width: 100%;
  }
  .ctaButton{
  p{
      width: 65px;
      margin-right: 1px;
    }
    .buttonImg{
      border:none;
    }
  }
.ctaTexts{
  margin-top: 2em;
  position: relative;
  z-index: 10;
  
  h2{
    width: 100%;
    color:  #002A48;
    text-align: center;
    font-size: 28px;
    font-weight: 800;
    line-height: 54px;
    text-transform: capitalize;
  }
  h3{
    width: 100%;
    color:  #002A48;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 36px;
    text-transform: capitalize;
  }
  p{
    color: #242B33;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    h2{
      font-size: 36px;
      color:  #003459;
    }
    h3{
      font-size: 24px;
      color:  #003459;
    }
  }
}

`
export const Box4 = styled.div`
position: absolute;
top: -340px;
right: -50px;
width: 605.027px;
height: 635px;
transform: rotate(11.41deg);
border-radius: 75px;
background: #FCEED5;
`
export const Section4 = styled.section`
  position: relative;
  z-index: 10;
  img{
    position: relative;
    z-index: 10;
    margin-bottom: -5px;
  }

`
export const Box5 = styled.div`
position: absolute;
z-index: 0;
top: 250px;
left: -200px;
width: 787.54px;
height: 787.54px;
transform: rotate(28.251deg);
border-radius: 99px;
background:  #002A48;
`