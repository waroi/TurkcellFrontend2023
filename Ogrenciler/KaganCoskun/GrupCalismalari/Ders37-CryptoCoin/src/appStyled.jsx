import styled from 'styled-components';

export const Main=styled.body`
    background-color:${props=>props.theme==="light"?"#f5f5f5":"#1f1f1f"};
    color:${props=>props.theme==="light"?"#1f1f1f":"#f5f5f5"};
    height:100vh;
    width:100vw;
    margin:0;  
`;