/* eslint-disable react/prop-types */
const DetailCard = ({ currency }) => {
	return (
		<>
			{currency && (
				<div className="row">
					<div className="col-4">
						<>
							<div className="d-flex gap-3 align-items-center">
								<span>
									<img src={currency.icon} width={30} height={30} /> <span>{currency.name}</span>
								</span>
								<span>({currency.symbol}) </span>
								<span>
									<i className="bi bi-star"></i>
								</span>
								<span>
									<i className="bi bi-upload"></i>
								</span>
								<button className="btn btn-primary px-3">+Follow</button>
							</div>
							<ul className="d-flex list-unstyled gap-3 mt-3">
								<li>Rank: {currency.rank}</li>
								<li>Coin</li>
								<li>4,022,172 watch lists</li>
							</ul>
							<div className="">
								<ul className="d-flex list-unstyled gap-3 mt-3 flex-wrap">
									<li>
										<a
											className="btn btn-secondary py-0 px-3 d-flex gap-2 align-items-center"
											href={currency.websiteUrl}
										>
											<i className="bi bi-globe"></i>Website
										</a>
									</li>
									<li>
										<a className="btn btn-secondary py-0 px-3 d-flex gap-2 align-items-center">
											<i className="bi bi-search"></i>Explorers
										</a>
									</li>
									<li>
										<a className="btn btn-secondary py-0 px-3 d-flex gap-2 align-items-center">
											<i className="bi bi-person"></i>Community
										</a>
									</li>
									<li>
										<a className="btn btn-secondary py-0 px-3 d-flex gap-2 align-items-center">
											<i className="bi bi-chat"></i>Chat
										</a>
									</li>

									<li>
										<a className="btn btn-secondary py-0 px-3">
											<i className="bi bi-code-slash"></i> Source code
										</a>
									</li>
									<li>
										<a className="btn btn-secondary py-0 px-3">
											<i className="bi bi-newspaper"></i> Whitepaper
										</a>
									</li>
								</ul>
							</div>
							<h5 className="text-start">Contracts:</h5>
							<div className="d-flex align-items-center gap-3">
								<div className="d-flex align-items-center gap-1">
									<img src={currency.icon} width={20} height={20} />
									<p className="mt-2">BNB Smart Chain (BEP20): 0*2170</p>
								</div>
								<i className="bi bi-files"></i>
								<i className="bi bi-shield text-light bg-primary p-1 rounded-circle"></i>
								<img src="https://static.coinstats.app/coins/1646234478930.png" alt="" width={20} />
							</div>
						</>
					</div>
					<div className="col-8">
						<div className="row">
							<div className="col">
								<div className="row">
									<div className="col-6">
										<p className="text-start ps-5 ms-5">{currency.name}</p>
										<div className="d-flex gap-2 align-items-center">
											<h3 className="ps-5 ms-5">${currency.price.toFixed(2)}</h3>
											{currency.priceChange1d > 0 ? (
												<button className="btn py-0 btn-success">{currency.priceChange1d}</button>
											) : (
												<button className="btn py-0 btn-danger">{currency.priceChange1d.toFixed(2)}</button>
											)}
										</div>
										<div className="d-flex gap-2 align-items-center">
											<p className="ps-5 ms-5">14.37 ETH </p>
											{currency.priceChange1w > 0 ? (
												<button className="btn py-0 btn-success">{currency.priceChange1w}</button>
											) : (
												<button className="btn py-0 btn-danger">{currency.priceChange1w.toFixed(2)}</button>
											)}
										</div>
									</div>
									<div className="col-6">
										<div className="d-flex gap-2">
											<button className="btn btn-primary">
												Buy<i className="bi bi-caret-down-fill"></i>
											</button>
											<button className="btn btn-primary">
												Exchange<i className="bi bi-caret-down-fill"></i>
											</button>
											<button className="btn btn-primary">
												Game<i className="bi bi-caret-down-fill"></i>
											</button>
											<button className="btn btn-primary">
												Earn Crypto<i className="bi bi-caret-down-fill"></i>
											</button>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="row">
										<div className="col-3">
											<div className=" bg-transparent text-white border-0">
												<div className="card-body text-start">
													<h5 className="card-title fs-6">Market Cap</h5>
													<h6 className="card-subtitle mb-2 mt-2">${currency.marketCap}</h6>
													<p className="card-text text-danger">
														<i className="bi bi-caret-down-fill"></i>0.21%
													</p>
													<p className="card-text">24h Volume / Market Cap 0.0214</p>
												</div>
											</div>
										</div>
										<div className="col-3">
											<div className=" bg-transparent text-white border-0">
												<div className="card-body text-start">
													<h5 className="card-title fs-6">Fully Diluted Market Cap</h5>
													<h6 className="card-subtitle mb-2 mt-2">${currency.marketCap + 10000}</h6>
													<p className="card-text text-danger">
														<i className="bi bi-caret-down-fill"></i>0.20%
													</p>
												</div>
											</div>
										</div>
										<div className="col-3">
											<div className=" bg-transparent text-white border-0">
												<div className="card-body text-start">
													<h5 className="card-title fs-6">Volume 24h</h5>
													<h6 className="card-subtitle mb-2 mt-2">${currency.volume}</h6>
													<p className="card-text text-danger">
														<i className="bi bi-caret-down-fill"></i>15.45%
													</p>
													<p className="card-text">CEX Vol {currency.volume.toFixed(0)}</p>
													<p className="card-text">DEX Vol {currency.availableSupply}</p>
												</div>
											</div>
										</div>
										<div className="col-3">
											<div className=" bg-transparent text-white border-0">
												<div className="card-body text-start">
													<h5 className="card-title fs-6">Circulating Supply</h5>
													<h6 className="card-subtitle mb-2 mt-2">
														{currency.totalSupply}
														{currency.symbol}
													</h6>
													<div
														className="progress"
														role="progressbar"
														aria-label="Basic example"
														aria-valuenow="75"
														aria-valuemin="0"
														aria-valuemax="100"
													>
														<div className="progress-bar" style={{ width: "92%" }}></div>
													</div>
													<p className="card-text">Max Supply {currency.availableSupply}</p>
													<p className="card-text">Total Supply {currency.totalSupply}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailCard;
