import styled from 'styled-components';


const Card = styled.div`
    display: flex;
    max-height: 340px;
    align-items: center;
    flex-direction: column;
    color: #333;
    width:100%;
    background: rgba(255, 255, 255, 0.28);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    border: 1px solid rgba(255, 255, 255, 0.28);
    padding: 2rem 0;
`;

const CardTitle = styled.h3`
   text-transform: capitalize;
`


export {Card, CardTitle};