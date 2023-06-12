import styled from 'styled-components';


const WeatherContainer = styled.div`
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
    padding: 2rem 0;
    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        gap:20px;
    }
`;

const CardContainer = styled(WeatherContainer)`
    margin-top: 2rem;
    background-color: transparent;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
    gap: 20px;
    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }
`




    export {WeatherContainer, CardContainer};