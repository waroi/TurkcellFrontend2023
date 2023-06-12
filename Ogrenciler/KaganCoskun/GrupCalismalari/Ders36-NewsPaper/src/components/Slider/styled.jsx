import styled from "styled-components";

 const SliderContainer = styled.div`
    width: 50%;
    max-height: 300px;
    margin:0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    `;

const SliderImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    `;


export {SliderContainer,SliderImg}