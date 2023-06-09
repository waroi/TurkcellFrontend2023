import styled from 'styled-components'
const Footer = () => {

  const FooterDiv = styled.div `
    background-color: #f8f9fa;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #212529;
    margin-top: 20px;
    padding: 0 20px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;
  return (
    <FooterDiv>
      <p>News Project - 2023</p>
    </FooterDiv>
  )
}

export default Footer
