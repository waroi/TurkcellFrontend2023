import { useParams } from 'react-router-dom'
import propTypes from 'prop-types'
import Detail from './detailStyle.js'

const NewsDetailPage = ({ news }) => {
 const { id } = useParams()
 const { name, description: desc, image, source, url } = news.find(item => item.key == id)

 return (
  <Detail>
   <img src={image} alt="" />
   <h1>
    <a href={url} target='_blank' rel="noreferrer" >
     {name}
    </a>
   </h1>
   <p>
    {desc}
   </p>
   <cite>
    - {source}
   </cite>
  </Detail>
 )
}

NewsDetailPage.propTypes = {
 news: propTypes.array.isRequired,
}


export default NewsDetailPage