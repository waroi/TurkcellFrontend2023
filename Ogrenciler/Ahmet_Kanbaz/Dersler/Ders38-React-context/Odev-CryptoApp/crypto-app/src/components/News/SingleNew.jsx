import PropTypes from 'prop-types'
import {SingleNewCard} from './NewsStyle'
import {useTheme} from '../../context/ThemeContext'
const SingleNew = ({singleNew}) => {
  const {theme} = useTheme()
  return (
    <SingleNewCard href={singleNew.link} target='_blank' theme={theme}>
      <img src={singleNew.image_url ? singleNew.image_url : 'https://i.pinimg.com/originals/56/5c/2f/565c2f14bd6a340276a064cdc7f3704d.jpg'} alt="" />
      <h3>{singleNew.title}</h3>
      <p>{singleNew.content}</p>
      <div className='newsInfoBottom'>
        <span>{singleNew.pubDate}</span>
        <cite>{singleNew.creator ? singleNew.creator : 'Anonymous'}</cite>
      </div>
    </SingleNewCard>
  )
}

SingleNew.propTypes = {
  singleNew: PropTypes.object
}

export default SingleNew
