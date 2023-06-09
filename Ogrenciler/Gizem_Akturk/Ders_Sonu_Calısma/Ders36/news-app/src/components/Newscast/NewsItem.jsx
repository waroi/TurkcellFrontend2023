import {Link} from 'react-router-dom'

const NewsItem = ({id,name, article, title, image, content, description, publish, author}) => {

  return (
  <div className="card">
    <div className="card-image">
        <img src={image} alt={title}/>
        <span className="card-title">{title}</span>
    </div>
    <div className="card-content">
        <p>{description}</p>
    </div>
    <div className="card-action">
        <Link to={`/news/${id}`}>This is a link</Link>
    </div>
    </div>
    
  )
}

export default NewsItem