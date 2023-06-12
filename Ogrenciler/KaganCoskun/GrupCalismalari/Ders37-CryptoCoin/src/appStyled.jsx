import styled from 'styled-components';

export const Main=styled.div`
    background-color:${props=>props.theme==="light"?"#f5f5f5":"#1f1f1f"};
    color:${props=>props.theme==="light"?"#1f1f1f":"#f5f5f5"};
    transition: all 0.3s ease-in-out;
    height:100%;
    margin:0;  
`;