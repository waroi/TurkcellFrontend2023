import { WhiteBorderButton, WhiteBorderButtonForMobile } from "../buttons/buttonStyle"
import { AllProductBlueTitle, AllProductShadowTitle, PetImg, PetKnow, PetText, PetTitle, ProductCard } from "./styledOneProduct"
import rarrow from '../../assets/rarrow.png'
import kopke1 from '../../assets/kopke1.png'
import kopke2 from '../../assets/kopke2.png'
import kopke3 from '../../assets/kopke3.png'

const PetKnowledge = () => {
  return (
    <div className="container">
      <div className='d-flex justify-content-between'>

        <div className="d-flex flex-column">
          <AllProductShadowTitle >You already know ?</AllProductShadowTitle>
          <AllProductBlueTitle> Useful pet knowledge</AllProductBlueTitle>
        </div>
        <WhiteBorderButton >
          <div>
            View More
            <img src={rarrow} alt="" />
          </div>
        </WhiteBorderButton>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <ProductCard className="card my-2 w-100">
            <PetImg src={kopke1} className="card-img-top img-fluid" alt="dog1" />
            <div className="card-body m-0 p-0 w-100">
              <PetKnow >Pet Knowledge</PetKnow>
              <PetTitle className="card-title text-start m-0 p-0">What is a Pomeranian? How to Identify Pomeranian Dogs</PetTitle>

              <PetText>The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</PetText>

            </div>
          </ProductCard>
        </div>
        <div className="col-lg-4">
          <ProductCard className="card my-2 w-100">
            <PetImg src={kopke2} className="card-img-top img-fluid" alt="dog1" />
            <div className="card-body m-0 p-0 w-100 ">
              <PetKnow >Pet Knowledge</PetKnow>
              <PetTitle className="card-title text-start m-0 p-0">Dog Diet You Need To Know</PetTitle>

              <PetText>Dividing a dogs diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.</PetText>

            </div>
          </ProductCard>
        </div>
        <div className="col-lg-4">
          <ProductCard className="card my-2 w-100">
            <PetImg src={kopke3} className="card-img-top img-fluid" alt="dog1" />
            <div className="card-body m-0 p-0 w-100">
              <PetKnow >Pet Knowledge</PetKnow>
              <PetTitle className="card-title text-start m-0 p-0">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</PetTitle>

              <PetText>Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</PetText>

            </div>
          </ProductCard>
        </div>
        <WhiteBorderButtonForMobile className="w-100">
          <div>
            View Intro
            <img src={rarrow} alt="" />
          </div>
        </WhiteBorderButtonForMobile>
      </div>
    </div>
  )
}

export default PetKnowledge