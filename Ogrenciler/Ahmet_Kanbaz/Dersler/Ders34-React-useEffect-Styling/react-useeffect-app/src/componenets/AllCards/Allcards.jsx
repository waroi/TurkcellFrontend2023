import PropTypes from 'prop-types'
import SingleCard from '../Cards/SingleCard';
const Allcards = ({posts, images}) => {
  const newCards = [];
  {
    posts.map((post) => {
    images.map((image) => {
        if(image.id == post.id) {
          const card = {
            id: post.id,
            title: post.title,
            body: post.body,
            imageUrl: image.download_url
          }
          newCards.push(card);
        }
      });
    });
  }
  return (
    <div>
      {
        newCards.map((singleCard) => {
          <SingleCard a='Hello' key={singleCard.id}/>
        })
      }
    </div>
  )
}

Allcards.propTypes = {
  posts: PropTypes.array,
  images: PropTypes.array
}

export default Allcards

//Single Card Component
/* <div className="singleCard">
        <div className="cardImage">
        <img src={singleCard.imageUrl} alt={singleCard.title} />
        </div>
        <div className="cardContent">
        <h3>{singleCard.title}</h3>
        <p>{singleCard.body}</p>
        </div>
      </div> */
