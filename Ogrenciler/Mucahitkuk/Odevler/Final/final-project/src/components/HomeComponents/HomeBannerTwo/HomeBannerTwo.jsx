import { PageButton, PageButtonTwo, TitleOne, TitleTwo } from "../HeaderContent/styled"
import {  BannerImg } from "../HomeBanner/styled"
import hand from "../../../assets/hand.png"
import { BannerContainerTwo } from "./styled"


const HomeBannerTwo = () => {
  return (
    <BannerContainerTwo  className='mt-5'>
    <div className='d-none d-xl-flex flex-lg-row-reverse justify-content-center align-items-center'>
      <div className='col-md-6'>
        <BannerImg src={hand}></BannerImg>
      </div>
      <div className='col-md-6'>
        <div className='d-flex text-center flex-column justify-content-center h-100 align-item-center'>
        <TitleOne>Dont Underestimate</TitleOne>
          <TitleTwo>Helping</TitleTwo>
          <div>
            <p >Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
</p>
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <PageButton >View Intro</PageButton>
            <PageButtonTwo >Explore Now</PageButtonTwo>
          </div>
        </div>
      </div>
    </div>
  </BannerContainerTwo>
  )
}

export default HomeBannerTwo