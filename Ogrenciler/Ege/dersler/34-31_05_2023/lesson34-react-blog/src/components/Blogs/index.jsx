import { useEffect, useState } from "react";
import FullPost from "../FullPost";
import { Grid } from "@mui/material";
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      <Grid container spacing={4}>
      {posts.map((post) => (
        <>
          <Grid item xs={12}>
            <FullPost key={post.id} post={post} />
          </Grid>
        </>
      ))}
      </Grid>
      
    </div>
  );
};

export default Blogs;
