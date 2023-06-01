import { useEffect,useState } from "react"
import BlogCard from "./BlogCard"
const BlogWrap = () => {

    const [blogDetail, setBlogDetail] = useState([])
    const [blogPhotos, setBlogPhotos] = useState([])




  async function getDatas(){

      let posts =await fetch("https://jsonplaceholder.typicode.com/posts")
      let post = await posts.json()
      setBlogDetail(post)

      let photos =await fetch(`https://picsum.photos/v2/list?limit=${post?.length}`)
      let photo = await photos.json()
      setBlogPhotos(photo)
    } 
    
    useEffect(() => {
      getDatas();
    }, [])
    
    return (
      <div className="row g-3">
      {blogPhotos.length>0 && blogDetail.map(blog => {
        blog.imgUrl = blogPhotos?.find(item=>Number(item.id) === blog.id-1)?.download_url;
        return (
          <div key={blog.id} className="col-lg-4">
            <BlogCard  blog={blog}/>
          </div>
        )
      })}
    </div>
  )
}

export default BlogWrap