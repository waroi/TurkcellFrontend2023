import styled from "styled-components";


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: ${({ theme }) => theme=== "light" ? "#f1f1f1" : "#333"};
    color: ${({ theme }) => theme=== "light" ? "#333" : "#f1f1f1"};
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    `;