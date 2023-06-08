import { useRef } from "react";
import { getNews } from "../services/api";
import { Link } from "react-router-dom";

const HomeView = ({ setLatestNews }) => {
	const countryCode = useRef();
	const categoryName = useRef();
	const getNewsFromDb = async () => {
		console.log("countryCode.current.value", countryCode.current.value);
		console.log("categoryName.current.value", categoryName.current.value);
		const latestNews = await getNews(countryCode.current.value, categoryName.current.value);
		await setLatestNews(latestNews);

		console.log(latestNews);
	};
	return (
		<div className="searchParent p-4">
			<h3>Boş Haber Sitesi</h3>
			<div className="row">
				<div className="col-8 d-flex flex-column mx-auto mt-3 align-items-center justify-content-center">
					<div className="inputArea mt-3">
						<label htmlFor="countries">Ülke Seçin</label>
						<select className="form-select mt-2" name="countries" ref={countryCode}>
							<option value="tr">&#127481;&#127479; Türkiye</option>
							<option value="us">&#127482;&#127480; Amerika</option>
							<option value="ru">&#127479;&#127482; Rusya</option>
							<option value="de">&#127465;&#127466; Almanya</option>
							<option value="gb">
								&#127988;&#917607;&#917602;&#917605;&#917614;&#917607;&#917631; Birleşik Krallık
							</option>
						</select>
					</div>
					<div className="inputArea mt-3">
						<label htmlFor="categories">Kategori Seçin</label>
						<select className="form-select mt-2" name="categories" ref={categoryName}>
							<option value="general">Genel</option>
							<option value="business">İş Dünyası</option>
							<option value="science">Bilim</option>
							<option value="technology">Teknoloji</option>
							<option value="sport">Spor</option>
						</select>
					</div>
					{
						<Link
							to="/news"
							className="btn btn-success mt-3 w-100"
							onClick={() => {
								getNewsFromDb();
							}}
						>
							Getir
						</Link>
					}
				</div>
			</div>
		</div>
	);
};

export default HomeView;
