import styled from 'styled-components'

export const FooterBG = styled.footer`
border-radius: 20px 20px 0px 0px;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
margin-top: 40px;
padding-top: 40px;

@media screen and (min-width: 768px) {
 padding-top: 80px;
 border-radius: 40px 40px 0px 0px;
}
`
export const Container = styled.div`
 width: 100%;
 margin: 0 auto;
 padding: 0 1em;
 .navigateSection{
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  border-bottom: 1px solid #CCD1D2;
  .menu{
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   color:  #00171F;
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
  }
 .socials{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 1em;
  img{
   cursor: pointer;
  }
 }
 @media screen and (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  .socials{
   margin-top: 0;
   justify-content: end;
  }
 }
 }
 .footerGrid{
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  img{
   margin: 0 auto;
  }
  .copy{
   color:  #667479;
   font-size: 10px;
   font-weight: 400;
   line-height: 16px;
   text-align: center;
  }
  .policy{
   display: flex;
   gap: 1em;
   justify-content: center;
   margin-top: 1.5em;
   p{
    color:  #667479;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
   }
  }
  @media screen and (min-width: 768px) {
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr;
   align-items: center;
   padding-bottom: 40px;
   .policy{
    margin-top: 0;
    order: 2;
    font-size: 14px;
    gap: 2em;
   }
   .copy{
    order: 0;
    font-size: 14px;
   }
   img{
    order: 1;
   }
  }
 }
 
 @media screen and (min-width: 768px) {
  max-width: 992px;
 }
`
export const Cta = styled.div`
display: grid;
grid-template-columns: 1fr;
padding: 16px;
gap: 16px;
align-self: stretch;
border-radius: 16px;
background:  #003459;
h3{
 color: #FDFDFD;
font-size: 20px;
font-weight: 700;
line-height: 32px;
text-transform: capitalize;
}
@media screen and (min-width: 768px) {
 grid-template-columns: 1.5fr 2fr;
}
`
export const CtaSection = styled.section`
display: flex;
padding: 12px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 12px;
align-self: stretch;
border-radius: 14px;
background: #FFF;
.ctaButton{
 width: 100%;
 div{
  border-radius: 8px;
 }
 @media screen and (min-width: 768px) {
  width: auto;
 }
}
@media screen and (min-width: 768px) {
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
}
`