import PropType from "prop-types"

const BlogCard = ({blog}) => {

    console.log(blog.imgUrl)

  return (
    <div className="card">
            <img src={`${blog.imgUrl}`} className="card-img-top " style={{height:"300px"}} alt="..." />
        <div className="card-body">
            <h5 className="card-title">{blog.title.length>20?blog.title.slice(0,20)+"...":blog.title}</h5>
            <p className="card-text">{blog.body.length>75?blog.body.slice(0,75)+"...":blog.body}</p>
            <a href={`${blog.imgUrl}`} className="btn btn-primary">Devamı Oku</a>
        </div>
    </div>
  )
}

BlogCard.propTypes = {
    blog:PropType.shape({
        imgUrl:PropType.string,
        title:PropType.string.isRequired,
        body:PropType.string.isRequired
    })
};

export default BlogCard


