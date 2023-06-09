import styled from 'styled-components';


export const Container = styled.div`
display: flex;
margin: 5rem auto;
max-width: 600px;
justify-content: center;
flex-direction: column;
text-align: center;
padding: 0 20px;
`

export const Image = styled.img`
border-radius: 10px;
width: 100%;
margin: 0 auto;
`;


export const NewsInfo = styled.div`
display:flex;
justify-content: space-between;
`;

export const NewsDate = styled.p`
  text-align: start;
`


export const ButtonContainer = styled.div`
display: flex;
margin: 20px auto;
justify-content: center;
gap: 2rem;
`;

export const NewsSource = styled.p`
`

export const Title = styled.h1`
`
export const Url = styled.a`
  width: fit-content;
  margin: 0 auto;
`

export const Description = styled.p``

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;