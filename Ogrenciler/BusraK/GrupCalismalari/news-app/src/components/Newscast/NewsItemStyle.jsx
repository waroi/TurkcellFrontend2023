import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  position: relative;
`;

export const Card = styled.div`
  background: url("https://i.ibb.co/b35MqHB/texture-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 450px 500px;
  background-position: top:40px;
  width: 300px;
  max-height: 500px;
  height: 550px;


  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 0.7rem;

  overflow: hidden;
  transition: 0.5s all;

  &:hover {
    transform: scale(1.05);
    
  }
`;

export const AuthorParagraph = styled.p`
  position: relative;
  bottom: 10px;
`;

export const DateParagraph = styled.p`
  position: relative;
  bottom: 30px;
`;

export const CardImage = styled.div`
  position: relative;
  flex-grow: 2;
  display: flex;
  top: 60px;

  width: 90%;
  max-height: 300px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70%;
    border-radius: 0.7rem;
    transition: transform 0.5s ease-in-out;
    height: 70%;
    width: 100%;
  }
`;

export const CardTitle = styled.span`
  position: absolute;
  bottom: 20px;
  left: 30px;
  width: 79%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  font-size: 11px;
`;

export const CardContent = styled.div`
  padding: 10px;
  position: relative;
  font-size: 14px;
  top: 20px;
  width: 70%;
  left: 16px;
  line-height: 1.5;
`;

export const CardAction = styled.div`
  text-align: right;
  padding: 10px;
  position: relative;
  bottom: 60px;
`;
