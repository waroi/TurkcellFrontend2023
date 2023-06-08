import { useRef } from "react";
import { getNews } from "../services/api";
import { Link } from "react-router-dom";

const HomeView = ({setLatestNews}) => {

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
			<h3>HAVA SOĞUK MU?</h3>
			<div className="row">
				<div className="col-8 d-flex mx-auto mt-3 align-items-center justify-content-center">
					<label htmlFor="countries">Ülke Seçin</label>
					<select  name="countries" ref={countryCode}>
						<option value="tr">Türkiye</option>
						<option value="us">Amerika</option>
						<option value="ru">Rusya</option>
						<option value="de">Almanya</option>
						<option value="gb">Birleşik Krallık</option>
					</select>
					<label htmlFor="categories">Ülke Seçin</label>
					<select  name="categories" ref={categoryName}>
						<option value="general">Genel</option>
						<option value="business">İş Dünyası</option>
						<option value="science">Bilim</option>
						<option value="technology">Teknoloji</option>
						<option value="sport">Spor</option>
					</select>
					{
					<Link
						to="/news"
						className="btn btn-success"
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
