import PropTypes from "prop-types";

const Card = ({ picsum, json }) => {
	const mergedData = picsum.map((item1) => {
		const item = json.find((item2) => item2.id == item1.id);
		return { ...item1, ...item };
	});

	console.log(mergedData);
	return (
		<>
			{mergedData.map((item) => (
				<div key={item.id} className="card mb-3" style={{ maxWidth: "540px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={item.download_url} className="img-fluid rounded-start" alt={item.download_url} />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{item.author}</h5>
								<p className="card-text">{item.title}</p>
								<p className="card-text">
									<small className="text-body-secondary">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

Card.propTypes = {
	picsum: PropTypes.array.isRequired,
	json: PropTypes.array.isRequired,
};

export default Card;
