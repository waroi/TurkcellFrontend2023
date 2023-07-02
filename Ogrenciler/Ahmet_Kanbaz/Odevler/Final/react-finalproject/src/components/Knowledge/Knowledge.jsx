import UpperSectionHeader from "../../common/UpperSectionHeader/UpperSectionHeader"
import KnowledgeCard from "./KnowledgeCard"
import {KnowledgeContainer} from './KnowledgeStyle'
import Button from "../../common/Button/Button"
import {AiOutlineRight} from 'react-icons/ai'

const Knowledge = () => {
  const knowledgeData = [
    {
      id: 1,
      title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGJrP2B7EMs-nWGCMKIVkhWrbGf_EfLn7gHTtMA7wfo9NwrbBeZtTCmLaN2xAScVbisJnA27b2Y5l289FEyNN9xb3jbFdg7qXonpyP_h7oEV1EzGTvINQf&usqp=CAE',
      description: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.',
      category: 'Pet knowledge'
    },
    {
      id: 2,
      title: 'Dog Diet You Need To Know',
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbf_pUVk2CBe1LjvOXThdqqgR2QWrDk68GaKcnnQ4SNbWoaaJ0E54GySakx-fbaVuF7_U2gRd2jIxwGy5cQjh1XxsJOP7CQwPYDdDqjei3&usqp=CAE',
      description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
      category: 'Pet knowledge'
    },
    {
      id: 3,
      title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
      img: 'https://cdn.dsmcdn.com/mnresize/1200/1800/ty953/product/media/images/20230615/13/385779009/496224798/1/1_org_zoom.jpg',
      description: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
      category: 'Pet knowledge'
    }
  ]
  return (
    <KnowledgeContainer className="container-fluid bg-body-tertiary">
      <div className="container py-5">
        <UpperSectionHeader upperTitle='You already know ?' upperSubTitle='Useful pet knowledge' upperButtonText='View more'/>
        <div className="row py-4 g-3 py-lg-5">
          {
            knowledgeData.map((knowledge) => <KnowledgeCard key={knowledge.id} knowledge={knowledge}/>)
          }
        </div>
        <div className="d-md-none d-flex justify-content-center">
        <Button
            buttonText="View more"
            color="#003459"
            padding="0.625rem 1.75rem"
            backgroundcolor="transparent"
            icon={<AiOutlineRight size="1.25rem" />}
            iconPosition="right"
            fontSize="1rem"
            className='w-100'
          />
        </div>
      </div>
    </KnowledgeContainer>
  )
}

export default Knowledge