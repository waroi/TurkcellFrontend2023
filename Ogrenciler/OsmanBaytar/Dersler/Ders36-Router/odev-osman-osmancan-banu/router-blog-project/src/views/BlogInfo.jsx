import React from "react";
import { useParams } from "react-router-dom";

const BlogInfo = () => {
  const params = useParams();
  console.log(params.id);
  return <div>BlogInfo</div>;
};

export default BlogInfo;
