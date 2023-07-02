import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import Loading from "../Loading/Loading";
import BlogCard from "../BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllArticles } from "../../redux/slices/blogSlice";
// import * as S from "./Blog.style";

const Blog = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.blog.articles);
	const loading = useSelector((state) => state.blog.loading);

	useEffect(() => {
		dispatch(getAllArticles());
	}, []);

	if (loading) {
		<Loading />;
	}

	return (
		<Section>
			<SectionHeader title="You already know ?" subTitle="Useful Pet Knowledge" />
			<div className="row">
				{articles?.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</Section>
	);
};

export default Blog;
