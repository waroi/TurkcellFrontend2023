import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid, Buttons } from './mainStyle.js'
const MainPage = ({ setPage, page, news, lang }) => {
 const langList = {
  "tr": { "prev": "Önceki", "next": "Sonraki" },
  "en": { "prev": "Prev", "next": "Next" },
  "de": { "prev": "Vorherige", "next": "Nächste" },
  "ru": { "prev": "предыдущий", "next": "следующий" }
 }
 return (
  <div>
   <Grid>
    {news && news.map((item, index) => {
     return <Link to={`/news/${item.key}`} key={index}>
      <div className='imgDIV'>
       <img src={item.image} alt={item.title} />
      </div>
      <h5>{item.name}</h5>
     </Link>
    })}
   </Grid>
   <Buttons>
    {page > 0 && <Link onClick={() => setPage(page - 1)} to={`/page/${page - 1}`} disabled={page == 0}>{langList[lang].prev}</Link>}
    <Link onClick={() => setPage(page + 1)} to={`/page/${page + 1}`}>{langList[lang].next}</Link>
   </Buttons>
  </div>
 )
}

MainPage.propTypes = {
 lang: PropTypes.string.isRequired,
 setPage: PropTypes.func.isRequired,
 page: PropTypes.number.isRequired,
 news: PropTypes.array.isRequired,
}


export default MainPage