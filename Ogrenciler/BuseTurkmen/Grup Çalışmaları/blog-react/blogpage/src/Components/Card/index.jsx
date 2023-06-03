import React from 'react';
import { useState,useEffect } from 'react';
import CardBody from '../CardBody';
import CardImg from '../Cardimg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



 function BlogCard({post}) {
  
  return (
   <div>
     <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={post.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </div>
  

  )
}

export default BlogCard

