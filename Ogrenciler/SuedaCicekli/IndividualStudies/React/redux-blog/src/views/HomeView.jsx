import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../utils/request';
import { addBlog } from '../redux/slices-actions/blogSlice';

const HomeView = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        dispatch(addBlog(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {/* Veriyi kullanarak UI oluşturma */}
    </div>
  );
};

export default HomeView;
