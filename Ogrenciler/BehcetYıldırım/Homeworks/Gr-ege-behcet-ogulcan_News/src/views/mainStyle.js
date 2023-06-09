import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1em;
  .imgDIV{
   width: 100%;
   height: 100px;
   display: flex; 
   justify-content: center;
   align-items: center;
   overflow: hidden;
   img {
    width: 100%;

   }
  }
  h5{
   margin-top: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
 `

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  gap: 1em;
  a{
    text-decoration: none;
    color: #fff;
    background-color: #11063c;
    padding: 1em;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover{
      background-color: #4d29b4;
     
     
    }
  }
 
`