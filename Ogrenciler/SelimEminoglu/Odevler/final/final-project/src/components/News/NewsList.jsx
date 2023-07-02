import { Container } from "../../assets/css/style";
import {
  NewsCardDiv,
  NewsListDiv,
  NewsTextDiv,
  NewsİmgDiv,
  NewsİmgDivSecond,
  NewsİmgDivThird,
  NewsTagDiv,
  NewsH3,
  NewsHeadline,
  NewsBody,
  NewsBodySecond,
} from "./styleNews";

function NewsList() {
  const newOne =
    "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that,the small, lovely, smart, friendly, and skillful circus dog breed.";

  const newSecond =
    "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.";

  const newThird =
    "Dog bites are common during development.However, no one wants to see their furniture or important items being bitten by a dog.";

  return (
    <Container>
      <NewsListDiv>
        <NewsCardDiv>
          <NewsİmgDiv></NewsİmgDiv>
          <NewsTextDiv>
            <NewsTagDiv>
              <NewsH3>Pet knowledge</NewsH3>
            </NewsTagDiv>
            <NewsHeadline>
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </NewsHeadline>
            <NewsBody>
              {newOne.length > 170 ? newOne.slice(0, 165) + "..." : newOne}
            </NewsBody>
          </NewsTextDiv>
        </NewsCardDiv>
        <NewsCardDiv>
          <NewsİmgDivSecond></NewsİmgDivSecond>
          <NewsTextDiv>
            <NewsTagDiv>
              <NewsH3>Pet knowledge</NewsH3>
            </NewsTagDiv>
            <NewsHeadline>Dog Diet You Need To Know</NewsHeadline>
            <NewsBodySecond>
              {newSecond.length > 150
                ? newSecond.slice(0, 208) + "..."
                : newSecond}
            </NewsBodySecond>
          </NewsTextDiv>
        </NewsCardDiv>
        <NewsCardDiv>
          <NewsİmgDivThird></NewsİmgDivThird>
          <NewsTextDiv>
            <NewsTagDiv>
              <NewsH3>Pet knowledge</NewsH3>
            </NewsTagDiv>
            <NewsHeadline>
              Why Dogs Bite and Destroy Furniture and How to Prevent It
              Effectively
            </NewsHeadline>
            <NewsBody>
              {newThird.length > 170
                ? newThird.slice(0, 165) + "..."
                : newThird}
            </NewsBody>
          </NewsTextDiv>
        </NewsCardDiv>
      </NewsListDiv>
    </Container>
  );
}

export default NewsList;
