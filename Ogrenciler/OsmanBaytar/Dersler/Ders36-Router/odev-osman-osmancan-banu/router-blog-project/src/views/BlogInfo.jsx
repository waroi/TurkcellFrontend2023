import { useParams } from "react-router-dom";
import {
  BlogTitle,
  BlogImage,
  BlogAuthor,
  BlogDate,
  BlogDescription,
} from "./BlogInfoStyle";

const BlogInfo = ({ data }) => {
  const params = useParams();
  const currentData = data[params.id];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <BlogTitle>{currentData?.title}</BlogTitle>
          <div className="col-8 mx-auto mt-3">
            <BlogImage src={currentData?.urlToImage}></BlogImage>
            <div className="d-flex justify-content-between">
              <BlogAuthor>{currentData?.author}</BlogAuthor>
              <BlogDate>{currentData?.publishedAt.slice(0, 10)}</BlogDate>
            </div>
          </div>

          <BlogDescription>{currentData?.description}</BlogDescription>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
