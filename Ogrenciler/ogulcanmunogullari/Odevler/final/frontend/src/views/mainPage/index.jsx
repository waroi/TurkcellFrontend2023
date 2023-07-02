import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TransparentButton from "../../components/Elements/buttons/TransparentButton"
import BasicButton from "../../components/Elements/buttons/BasicButton"
import BasicCard from "../../components/Elements/card/BasicCard"
import FetchTool from "../../utils/fetchTool"
import Banner from "../../assets/header_img.png"
import CTABanner from "../../assets/cta_banner.png"
import { Header, HeaderBG, Container, Box1, Flex, MarginDiv, Box2, Box3, Box4, Box5, Section3, Section4, Main, Cards, CallToAction, Blogs } from "./style"
import Dog1 from "../../assets/dog_1.png"
import Dog2 from "../../assets/dog_2.png"
import Dog3 from "../../assets/dog_3.png"
const MainPage = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    if (products.length > 0) return;
    FetchTool.getProducts().then(res => {
      setProducts(res)
    })
  }, [products])
  return (
    <>
      <HeaderBG>
        <Container>
          <Header>
            <Flex mdirection={"column"} direction={"row"}>
              <section className="sec1">
                <Box1></Box1>
                <MarginDiv>
                  <Container>
                    <h1>One More Friend</h1>
                    <h2>Thousands More Fun!</h2>
                    <p>
                      Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                    </p>
                    <Flex padding={"0 3em 0 0"} margin={"1em 0"} gap={"1em"} justify={"flex-start"}>
                      <TransparentButton>
                        View Intro
                      </TransparentButton>
                      <BasicButton width={"107px"}>
                        Explore Now
                      </BasicButton>
                    </Flex>
                  </Container>
                </MarginDiv>
              </section>
              <section className="sec2">
                <Box2></Box2>
                <Box3></Box3>
                <img src={Banner} alt="" />
              </section>
            </Flex>
          </Header>
        </Container>
      </HeaderBG>
      <Main>
        <Container>
          <Flex mdirection="column" direction="column">
            <h4 className="prodHeader1">Whats new?</h4>
            <Flex margin={"0 0 1em 0"} justify={"space-between"}>
              <h2 className="prodHeader2">Take a look at some of our pets</h2>
              <Link to={"/category"} className="onlyComputer">
                <TransparentButton>
                  View More
                </TransparentButton>
              </Link>
            </Flex>
            <Cards>
              {products
                .sort(() => 0.5 - Math.random())
                .slice(0, 8)
                .map((product) => {
                  return (
                    <BasicCard key={product.id} product={product} />
                  )
                })}
            </Cards>
            <Link to={"/category"} className="onlyMobile">
              <TransparentButton>
                View More
              </TransparentButton>
            </Link>
          </Flex>
          <CallToAction>
            <Flex direction={"row-reverse"} mdirection={"column"}>
              <Section3>
                <Box4></Box4>
                <Flex direction={"column"} mdirection={"column"} className="ctaTexts">
                  <h2>One More Friend</h2>
                  <h3>Thousands More Fun!</h3>
                  <p>
                    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                  </p>

                  <Flex margin={"1em 0"} justify={"space-around"} align={"center"} gap={"5px"}>
                    <div className="ctaButton">
                      <TransparentButton>
                        View Intro
                      </TransparentButton>
                    </div>
                    <BasicButton width={"107px"}>
                      Explore Now
                    </BasicButton>
                  </Flex>

                </Flex>
              </Section3>
              <Section4>
                <Box5></Box5>
                <img src={CTABanner} alt="" />
              </Section4>
            </Flex>
          </CallToAction>
          <Flex mdirection="column" direction="column" margin={"2em 0 0 0"}>
            <h4 className="prodHeader1">You Already know?</h4>
            <Flex margin={"0 0 1em 0"} justify={"space-between"}>
              <h2 className="prodHeader2">Usefull Pet Knowledge</h2>
              <Link to={"/blogs"} className="onlyComputer">
                <TransparentButton>
                  View More
                </TransparentButton>
              </Link>
            </Flex>
            <Blogs>
              <Link to={"/blogs"} className="blogItem">
                <div className="image_Div">
                  <img src={Dog1} alt="" />
                </div>
                <div className="button">
                  <BasicButton color={"#00A7E7"} mcolor={"#00A7E7"} width={"107px"}>
                    Pet Knowledge
                  </BasicButton>
                </div>
                <div className="info">
                  <h3>What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
                  <p>
                    The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
                  </p>
                </div>
              </Link>
              <Link to={"/blogs"} className="blogItem">
                <div className="image_Div">
                  <img src={Dog2} alt="" />
                </div>
                <div className="button">
                  <BasicButton color={"#00A7E7"} mcolor={"#00A7E7"} width={"107px"}>
                    Pet Knowledge
                  </BasicButton>
                </div>
                <div className="info">
                  <h3>Dog Diet You Need To Know</h3>
                  <p>
                    Dividing a dog&#39;s diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.
                  </p>
                </div>
              </Link>
              <Link to={"/blogs"} className="blogItem">
                <div className="image_Div">
                  <img src={Dog3} alt="" />
                </div>
                <div className="button">
                  <BasicButton color={"#00A7E7"} mcolor={"#00A7E7"} width={"107px"}>
                    Pet Knowledge
                  </BasicButton>
                </div>
                <div className="info">
                  <h3>Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h3>
                  <p>
                    Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.
                  </p>
                </div>
              </Link>
            </Blogs>
            <Link to={"/blogs"} className="onlyMobile">
              <TransparentButton>
                View More
              </TransparentButton>
            </Link>
          </Flex>
        </Container>
      </Main>
    </>
  )
}

export default MainPage