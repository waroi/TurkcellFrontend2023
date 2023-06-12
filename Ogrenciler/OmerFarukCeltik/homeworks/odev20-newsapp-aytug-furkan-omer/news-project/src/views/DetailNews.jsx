import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const DetailNews = ({ latestNews }) => {
	const { id } = useParams();
	const data = latestNews.articles.find((item) => item.publishedAt == id);
	return (
		<div>
			<h1>{data.author}</h1>
			<h6>{data.title}</h6>
			<p>{data.publishedAt}</p>
			<p>
				url: <a href={data.url}>Go To Website</a>
			</p>
			<iframe src={data.url}></iframe>
		</div>
	);
};

DetailNews.propTypes = {
	latestNews: PropTypes.object,
};

export default DetailNews;
