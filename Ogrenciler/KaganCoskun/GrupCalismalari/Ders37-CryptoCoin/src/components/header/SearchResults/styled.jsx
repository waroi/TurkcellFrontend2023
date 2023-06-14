import styled from "styled-components";
import { Link } from "react-router-dom";

export const SeacrhResultWrap = styled.div`
    position: absolute;
    top: 86px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    background-color: ${({theme})=>theme === "light" ? "#fff" : "#333"};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    overflow: hidden;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0 10px;
    `;

    export const SearchResultItem = styled(Link)`
    width: 100%;
    padding:0 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: #ccc;
    }
    `;