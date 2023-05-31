import { useEffect, useState } from "react";
import FullPost from "../FullPost";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <FullPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blogs;
