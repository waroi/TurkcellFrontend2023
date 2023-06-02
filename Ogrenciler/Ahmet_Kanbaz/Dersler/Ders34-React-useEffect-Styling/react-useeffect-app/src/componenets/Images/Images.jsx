import {useState, useEffect} from 'react'
import Allcards from '../AllCards/Allcards'
import PropTypes from 'prop-types'

const Images = ({posts}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
    .then((response) => response.json())
    .then((item) => setImages(item))
    .catch((error) => console.log(error))
  },[])

  return (
    <div>
      <Allcards posts={posts} images={images}/>
    </div>
  )
}

Images.propTypes = {
  posts: PropTypes.array
}

export default Images
