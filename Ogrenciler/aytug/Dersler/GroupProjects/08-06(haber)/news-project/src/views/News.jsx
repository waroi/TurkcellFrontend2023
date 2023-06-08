import { Link } from "react-router-dom";

const News = ({ latestNews }) => {

	return (
		<div className="row">
			{latestNews?.articles.map((item, i) => (
					<div className="col-3 g-4">
				<Link  key={i} to={`/news/${item.url.slice(38)}`} >
				<div className="card h-100" >
					<img src={`https://picsum.photos/id/${i}/200/300`} alt=""  className="img-fluid"/>
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
