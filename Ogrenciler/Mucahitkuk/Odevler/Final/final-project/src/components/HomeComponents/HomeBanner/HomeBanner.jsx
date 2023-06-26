import goodHuman2 from '../../../assets/goodHuman2.png'
import { PageButton, PageButtonTwo, TitleOne, TitleTwo } from '../HeaderContent/styled'
import { BannerContainer, BannerImg} from './styled'
const HomeBanner = () => {
  return (
    <BannerContainer className='mt-5'>
      <div className='d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center'>
        <div className='col-md-6'>
          <BannerImg src={goodHuman2}></BannerImg>
        </div>
        <div className='col-md-6'>
          <div className='d-flex text-center flex-column justify-content-center h-100 align-item-center'>
          <TitleOne className='text-white'>One More Friend</TitleOne>
            <TitleTwo className='text-white'>Thousands More Fun!</TitleTwo>
            <div>
              <p className='text-white'>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
</p>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <PageButton className="bg-transparent  border text-white">View Intro</PageButton>
              <PageButtonTwo className="bg-primary">Explore Now</PageButtonTwo>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default HomeBanner