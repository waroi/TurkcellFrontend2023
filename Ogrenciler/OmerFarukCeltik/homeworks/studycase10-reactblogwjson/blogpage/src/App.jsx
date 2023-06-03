import { useState, useEffect, useMemo } from "react";
import BlogCard from "./Components/Card";
import "./App.css";
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}
async function getImages() {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=1&limit=100"
  );
  return await response.json();
}
function usePosts() {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(setPosts);
    getImages().then(setImages);
  }, []);
  return posts.length && images.length
    ? posts.map((postItem, i) => {
        return {
          ...postItem,
          image: images[i].download_url,
        };
      })
    : [];
}

function App() {
  // const [images, setImages] = useState([]);
  // const [posts, setPosts] = useState([]);
  // const blogPosts =
  //   posts.length && images.length
  //     ? posts.map((postItem, i) => {
  //         return {
  //           ...postItem,
  //           image: images[i].download_url,
  //         };
  //       })
  //     : [];
  // const blogPosts2 = useMemo(
  //   () =>
  //     posts.map((postItem, i) => {
  //       if (!images.length) {
  //         return [];
  //       }
  //       return {
  //         ...postItem,
  //         image: images[i].download_url,
  //       };
  //     }),
  //   [images, posts]
  // );
  // useEffect(() => {
  //   getPosts().then(setPosts);
  //   getImages().then(setImages);
  // }, []);
  const posts = usePosts();
  return (
    <>
      {posts.map((item) => (
        <BlogCard key={item.id} post={item} />
      ))}
    </>
  );
}

export default App;
