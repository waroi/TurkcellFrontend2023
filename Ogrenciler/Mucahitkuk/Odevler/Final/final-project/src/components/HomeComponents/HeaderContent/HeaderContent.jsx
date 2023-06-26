import { BackgroundCard, HeaderImg, HomeUpContainer, PageButton, PageButtonTwo, TitleOne, TitleTwo } from "./styled"
import goodHuman from "../../../assets/goodHuman.svg"

const HeaderContent = () => {
  return (
    <BackgroundCard>
      <HomeUpContainer>
        <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
          <div className="d-flex flex-column col-lg-5 float-md-start align-items-center">
            <TitleOne>One More Friend</TitleOne>
            <TitleTwo>Thousands More Fun!</TitleTwo>
            <div>
              <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
</p>
            </div>
            <div className="d-flex gap-3">
              <PageButton>View Intro</PageButton>
              <PageButtonTwo>Explore Now</PageButtonTwo>
            </div>
          </div>
          <div className="d-flex flex-column col-lg-7">
            <HeaderImg src={goodHuman}></HeaderImg>
          </div>
        </div>
      </HomeUpContainer>
    </BackgroundCard>
  )
}

export default HeaderContent