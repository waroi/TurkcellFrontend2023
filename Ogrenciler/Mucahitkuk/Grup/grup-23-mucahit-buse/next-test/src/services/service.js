import axios from 'axios';

async function getServerSideProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}


export default getServerSideProps