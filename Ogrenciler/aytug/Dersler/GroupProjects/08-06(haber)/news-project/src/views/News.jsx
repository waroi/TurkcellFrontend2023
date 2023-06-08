const News = ({ latestNews }) => {
	console.log("BURASI");
	console.log(latestNews);
	return (
		<div className="row">
			{latestNews.map((item, i) => (
				<div className="card" key={i}>
					{item.title}
				</div>
			))}
		</div>
	);
};

export default News;
