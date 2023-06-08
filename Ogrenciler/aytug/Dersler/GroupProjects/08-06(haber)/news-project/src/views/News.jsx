import { Link } from "react-router-dom";

const News = ({ latestNews }) => {

	return (
		<div className="row news-bg">
			{latestNews?.articles.map((item, i) => (
					<div key={i} className="col-3 g-4">
				<Link to={`/news/${item.publishedAt}`} >
				<div className="card h-100 rounded-3 border-0" >
					<img src={`https://picsum.photos/id/${i}/200/100`} alt=""  className="img-fluid rounded-top-3"/>
				<div className="card-body">
					<h5 className="card-title">{item.author}</h5>
					<p className="card-text">{item.title}</p>
				</div>
			</div>
			</Link>
			</div>
			))}
		</div>
	);
};

export default News;
