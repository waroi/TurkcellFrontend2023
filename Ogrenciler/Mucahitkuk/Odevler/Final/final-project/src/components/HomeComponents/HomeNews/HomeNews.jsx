import { Card } from "react-bootstrap"
import { StyledCardImage } from "../../ProductCard/styled"
import { InfoHeader, NewsCard } from "./styled"
import news1 from "../../../assets/news1.png"
import news2 from "../../../assets/news2.png"
import news3 from "../../../assets/news3.png"

const HomeNews = () => {
  return (
    <>
    <NewsCard>
    <StyledCardImage className="img-fluid" variant="top" src={news1}  alt="Card image cap"/>
    <Card.Body>
      <Card.Title>
      <InfoHeader>
        Product Knowledge
        </InfoHeader>
      </Card.Title>
      <p>Lorem products you need to know.</p>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio, sed aliquid aliquam similique earum excepturi laboriosam dolores sequi maxime.</p>
    </Card.Body>
  </NewsCard>
     <NewsCard>
     <StyledCardImage variant="top" src={news2}   />
     <Card.Body>
     <Card.Title>
     <InfoHeader>
        Product Knowledge
        </InfoHeader>
     </Card.Title>
        <p>Lorem products you need to know.</p>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio, sed aliquid aliquam similique earum excepturi laboriosam dolores sequi maxime.</p>
     </Card.Body>
   </NewsCard>
      <NewsCard>
      <StyledCardImage variant="top" src={news3}   />
      <Card.Body>
      <Card.Title>
      <InfoHeader>
        Product Knowledge
        </InfoHeader>
      </Card.Title>
      <p>Lorem products you need to know.</p>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio, sed aliquid aliquam similique earum excepturi laboriosam dolores sequi maxime.</p>
      </Card.Body>
    </NewsCard>
    </>
  )
}

export default HomeNews