import PropTypes from 'prop-types'
import SingleCard from '../Cards/SingleCard';
import './allcards.css'
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
    <div className='allCards'>
      {newCards.map((newCard) => (
        <SingleCard key={newCard.id} newCard={newCard}/>
      ))}
    </div>
  )
}

Allcards.propTypes = {
  posts: PropTypes.array,
  images: PropTypes.array
}

export default Allcards