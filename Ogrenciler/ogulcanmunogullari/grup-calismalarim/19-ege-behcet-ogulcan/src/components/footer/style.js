import styled from 'styled-components';

const FooterComponent = styled.footer`
 margin-top: auto;
 background-color: #f2f2f2;
 padding: 3rem 0;
 .container {
  width: 1140px;
  margin: 0 auto;
 }
 .created {
  text-align: center;
  font-size: 1.5em;
 }
 .cards {
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20em;
 }
 .card {
  background-color: #fff;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  overflow: hidden;
  img{
   width: 100%;
   cursor: pointer;
   animation: donbakem 2s linear infinite ;
  }
  border-radius: 50%;
  @keyframes donbakem {
   0%{
    transform: rotate(0deg);
   }
   100%{
    transform: rotate(360deg);}
  }
 }
 .card:nth-child(2){
  img{
   animation: tersdonbakem 2s linear infinite ;
  }
  @keyframes tersdonbakem {
   0%{
    transform: rotate(0deg);
   }
   100%{
    transform: rotate(-360deg);}
  }
 }
`;

export default FooterComponent;
