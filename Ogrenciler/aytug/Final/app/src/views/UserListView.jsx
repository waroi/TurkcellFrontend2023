import { useEffect } from "react";
import { getAllUsers } from "../services/userService";

const UserListView = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await getAllUsers();
				console.log(users);
			} catch (error) {
				console.error("Kullanıcılar getirilirken hata oluştu:", error);
			}
		};
		fetchData();
	}, []);
	return <div>UserListView</div>;
};

export default UserListView;
