import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/userService";

const UserDetailView = () => {
	const { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const user = await getUserById(id);
				console.log(user);
			} catch (error) {
				console.error("Kullanıcı verisi getirilirken hata oluştu:", error);
			}
		};
		fetchData();
	}, []);
	return <div>UserDetailView</div>;
};

export default UserDetailView;
