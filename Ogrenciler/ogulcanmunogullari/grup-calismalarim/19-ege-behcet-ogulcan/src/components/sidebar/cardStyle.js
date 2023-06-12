import styled from 'styled-components';

const SidebarStyle = styled.div`
 display: grid;
 grid-template-columns: 1fr 3fr;
 gap: 0.5em;
 width: 100%;
 background-color: #fff;
 border-radius: 0.5em;
 box-shadow: 0 0 0.25em #ccc;
 padding: 0.5em;
 height: 100px;
 align-items: center;
 .mainDIV{
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  h3{
   font-size: 1em;
   display: -webkit-box;
 -webkit-line-clamp: 1;
 -webkit-box-orient: vertical;
 overflow: hidden;
  }
  p{
 display: -webkit-box;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
 overflow: hidden;
  }
 }
 .imgDIV {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
   height: 100%;
  }
 }
 &:hover {
  /* Shadow */
  box-shadow: 0 0 1em #ccc;
 }
`;
export default SidebarStyle;
