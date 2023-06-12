import {useState, useEffect} from 'react'
import Images from '../Images/Images';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((item) => setPosts(item))
    .catch((error) => console.log(error))
  },[])
  return (
    <div>
      <Images posts = {posts}/>
    </div>
  )
}

export default Posts
