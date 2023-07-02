import { BannerContainer, BannerImg } from '../../HomeComponents/HomeBanner/styled'
import { PageButton, PageButtonTwo, TitleOne, TitleTwo } from '../../HomeComponents/HeaderContent/styled'
import Adorable from "../../../assets/adorable.png"
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const ProductHeader = () => {
  return (
    <>
    <Container>
      <div className='d-flex'>
        <Link className="text-secondary" to="/">Home &nbsp;</Link><span className='text-secondary'>&gt;</span> 
        <Link className="text-secondary" to="/Product">&nbsp; Products</Link>
      </div>
    </Container>
    <BannerContainer className="mt-3">
      <div className='d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center'>
        <div className='col-md-6'>
          <BannerImg src={Adorable}></BannerImg>
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
    </>
  )
}

export default ProductHeader