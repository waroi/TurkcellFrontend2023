import React, { useEffect } from 'react';
import { useState } from 'react';
import Posts from '../Posts/index.jsx';
import "./style.css"

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])  ;
  return (
    <div className='blog'>
        {posts.map((post) => (
            <Posts key={post.id} post={post}>
                </Posts>
        ))}

               
            
    </div>
  )
}

export default Blog