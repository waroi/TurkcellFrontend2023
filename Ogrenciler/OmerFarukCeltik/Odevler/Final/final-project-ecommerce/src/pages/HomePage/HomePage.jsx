import style from "./HomeStyle.module.css"
import Header from './Header/Header'
import WhatsNew from './WhatsNew/WhatsNew'
import FirstBanner from './FirstBanner/FirstBanner';
import OurProducts from './OurProductsArea/OurProducts';
import SecondBanner from './SecondBanner/SecondBanner';
import UsefulArea from './UserfulCardArea/UsefulArea';
const HomePage = () => {
  return (
    <div>
      <div className={style.homeBody}>
      <Header/>
      </div>
      <WhatsNew/>
      <FirstBanner/>
      <OurProducts/>
      <SecondBanner/>
      <UsefulArea/>
    </div>
  )
}

export default HomePage