import styled from 'styled-components';
export const MainDiv = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 background-color: rgba(0,0,0,0.5);
 z-index: 100;
 display: flex;
 justify-content: center;
`

export const FormDiv = styled.form`
 width: 80%;
 max-width: 500px;
 background-color: white;
 padding: 20px;
 border-radius: 5px;
 display: flex;
 gap: 1em;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 .butDiv{
  display: flex;
  gap: 1em;
 }
`
export const InputDiv = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: start;
 gap: .5em;
 width: 100%;
 height: 120px;
 overflow: hidden;
`