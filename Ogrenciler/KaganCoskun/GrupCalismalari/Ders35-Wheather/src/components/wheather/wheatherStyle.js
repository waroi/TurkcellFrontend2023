import styled from 'styled-components';


const WheatherContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position:relative;
    color: #333;
    width:100%;
    background: rgba(255, 255, 255, 0.28);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    border: 1px solid rgba(255, 255, 255, 0.28);
`;

const IconImg = styled.img`
    width: 50%;
    height:auto;
    `; 
const WheatherInfo = styled.div`
    width:50%;
    text-align:center;
    `;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    &::first-letter{
        text-transform: uppercase;
    }`;
    export {WheatherContainer, IconImg,WheatherInfo,Title};