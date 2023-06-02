
const API_URL = "https://api.github.com/users";

const getUserFromDb = async (userName) => {
    const response = await fetch(`${API_URL}/${userName}`);
    const data = await response.json();
    return data;
};

export default getUserFromDb
