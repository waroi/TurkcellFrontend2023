import styled from 'styled-components';

export const CardParent = styled.div`
    background-color: rgb(50, 53, 70);
    color: rgb(255, 255, 255);
    /* width: 25%; */
    width: 410px;
    height: max-content;
    padding: 16px;
    margin: 5px;
    margin-bottom: 25px;
    border-radius:10px;
    justify-content: center;
    align-items: center;
    > a {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-weight: 600;
    }
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease;
        cursor: pointer;
        ;
    }
`
