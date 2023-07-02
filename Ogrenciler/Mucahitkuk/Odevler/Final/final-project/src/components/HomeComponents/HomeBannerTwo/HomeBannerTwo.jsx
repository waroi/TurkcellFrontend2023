import { PageButton, PageButtonTwo, TitleOne, TitleTwo } from "../HeaderContent/styled"
import {  BannerImg } from "../HomeBanner/styled"
import hand from "../../../assets/hand.png"
import { BannerContainerTwo, HomeRectangle3, HomeRectangle4 } from "./styled"


const HomeBannerTwo = () => {
  return (
    <BannerContainerTwo  className='mt-5'>
    <div className='d-none d-xl-flex z-2 flex-lg-row-reverse justify-content-center align-items-center'>
      <div className='col-md-6'>
        <BannerImg src={hand}></BannerImg>
      </div>
      <div className='col-md-6'>
        <div className='d-flex text-center flex-column justify-content-center h-100 align-item-center'>
        <TitleOne>Dont Underestimate</TitleOne>
          <TitleTwo>Helping</TitleTwo>
          <div>
            <p >Adopt a pet and give it a home, it will be love you back unconditionally.

</p>
          </div>
          <div className="d-flex gap-3 justify-content-center flex-row-reverse">
            <PageButton >View Intro</PageButton>
            <PageButtonTwo >Explore Now</PageButtonTwo>
          </div>
        </div>
      </div>
    </div>
    <HomeRectangle3 className="z-1" />
    <HomeRectangle4 className="z-1" />
  </BannerContainerTwo>
  )
}

export default HomeBannerTwo