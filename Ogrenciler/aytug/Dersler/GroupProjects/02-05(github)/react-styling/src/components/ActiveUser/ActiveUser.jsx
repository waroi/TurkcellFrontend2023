import PropTypes from "prop-types";

const ActiveUser = ({ activeUser, userRepos }) => {
	// console.log(userRepos[0].created_at);
	// console.log(userRepos.sort((a, b) => {
	//     a.created_at - b.created_at
	// }));
	return (
		<div className="bg-none">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-4">
						<img src={activeUser.avatar_url} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-8">
						<div className="col-12">
							<h5 className="card-title">{activeUser.name}</h5>
							<h6 className="card-title">{activeUser.bio}</h6>
						</div>
						<div className="col-12">
							<div className="row">
								<div className="col-6 px-5">
									<div className="card-body text-start">
										<p className="card-text mb-2">
											<i className="bi bi-building"></i>
											{activeUser.company}
										</p>
										<p className="card-text mb-2">
											<i className="bi bi-pin-map"></i> {activeUser.location}
										</p>
										<p>
											<i className="bi bi-people">
												{activeUser.followers} takip edilen - {activeUser.following} takipçi
											</i>
										</p>
									</div>
								</div>
								<div className="col-6">
									<p className="card-text mb-2">
										<i className="bi bi-journal-bookmark-fill"></i> {activeUser.public_repos} repos
									</p>
									<ul className="list-group text-start">
										<li className="list-group-item mt-2">
											<div className="row">
												<div className="col-6">
													<p className="card-text mb-1">{userRepos[userRepos.length - 1].name}</p>
													<p className="card-text mb-1">{userRepos[userRepos.length - 1].created_at.slice(0, 10)}</p>
												</div>
												<div className="col-6">
													<p className="card-text mb-1">Forks :{userRepos[userRepos.length - 1].forks}</p>
													<p className="card-text mb-1">Watchers :{userRepos[userRepos.length - 1].watchers}</p>
												</div>
											</div>
										</li>
										<li className="list-group-item mt-2 ">
											<div className="row">
												<div className="col-6">
													<p className="card-text mb-1">{userRepos[userRepos.length - 2].name}</p>
													<p className="card-text mb-1">{userRepos[userRepos.length - 2].created_at.slice(0, 10)}</p>
												</div>
												<div className="col-6">
													<p className="card-text mb-1">Forks :{userRepos[userRepos.length - 2].forks}</p>
													<p className="card-text mb-1">Watchers :{userRepos[userRepos.length - 2].watchers}</p>
												</div>
											</div>
										</li>
										<li className="list-group-item mt-2">
											<div className="row">
												<div className="col-6">
													<p className="card-text mb-1">{userRepos[userRepos.length - 3].name}</p>
													<p className="card-text mb-1">{userRepos[userRepos.length - 3].created_at.slice(0, 10)}</p>
												</div>
												<div className="col-6">
													<p className="card-text mb-1">Forks :{userRepos[userRepos.length - 3].forks}</p>
													<p className="card-text mb-1">Watchers :{userRepos[userRepos.length - 3].watchers}</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActiveUser;
ActiveUser.propTypes = {
	activeUser: PropTypes.object,
	userRepos: PropTypes.array,
};
