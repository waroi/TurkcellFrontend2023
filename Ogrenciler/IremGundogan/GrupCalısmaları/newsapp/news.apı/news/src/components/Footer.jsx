//footer.jsx

import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
  
    width: 100%;
    bottom: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2023 Your News Website. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;