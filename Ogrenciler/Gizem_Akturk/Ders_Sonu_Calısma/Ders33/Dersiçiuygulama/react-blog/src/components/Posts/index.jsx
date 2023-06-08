import React from 'react'
import Image from './Image/index.jsx'
import Content from './Content/index.jsx'
import "./style.css"
const Posts = ({post}) => {
  return (
    <div className="post">
      <Image imgUrl={`https://picsum.photos/id/${post.id}/200/300`} />
      <Content title={post.title} text={post.body} />
    
    </div>

  )
}

export default Posts