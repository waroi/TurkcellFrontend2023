//BreakingNews.jsx

import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      cursor: pointer;
      transition: transform 0.3s ease; /* Transition efekti için transform özelliğini kullanıyoruz */

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

const BreakingNews = ({news}) => {
  const breakingNews = news.slice(0, 5);
  console.log(breakingNews);
  return (
    <Content>
      <h3>Son Dakika Haberler</h3>
      <ul>
        {breakingNews.map((item) => (
          <li key={item.id}>
            <Img src={item.image} alt=""></Img>
            {item.title}
          </li>
        ))}
      </ul>
    </Content>
  );
};

export default BreakingNews;
