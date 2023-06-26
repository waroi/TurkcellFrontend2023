import { Card } from "react-bootstrap"
import { StyledCardImage } from "../../ProductCard/styled"
import { NewsCard } from "./styled"


const HomeNews = () => {
  return (
    <>
    <NewsCard>
    <StyledCardImage className="w-100" variant="top" src="https://picsum.photos/200/300" alt="Card image cap"/>
    <Card.Body>
      <Card.Title style={{fontSize: '16px'}}>Software products you need to know.</Card.Title>
      <div>
      <p className="text-primary">Product Knowledge</p>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio, sed aliquid aliquam similique earum excepturi laboriosam dolores sequi maxime.</p>
      </div>
    </Card.Body>
  </NewsCard>
     <NewsCard>
     <StyledCardImage variant="top" src="https://picsum.photos/200/400"  />
     <Card.Body>
     <Card.Title style={{fontSize: '16px'}}>Lorem products you need to know.</Card.Title>
       <div>
       <p className="text-primary">Product Knowledge</p>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio, sed aliquid aliquam similique earum excepturi laboriosam dolores sequi maxime.</p>
       </div>
     </Card.Body>
   </NewsCard>
      <NewsCard>
      <StyledCardImage variant="top" src="https://picsum.photos/200/500"  />
      <Card.Body>
      <Card.Title style={{fontSize: '16px'}}>Tech products you need to know.</Card.Title>
        <div>
        <p className="text-primary">Product Knowledge</p>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio, sed aliquid aliquam similique earum excepturi laboriosam dolores sequi maxime.</p>
        </div>
      </Card.Body>
    </NewsCard>
    </>
  )
}

export default HomeNews