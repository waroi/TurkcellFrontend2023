import { setLocalStorage } from "./localStorage";

export const getUser = async(searchTerm)=>{
    const response = await fetch(`https://api.github.com/users/${searchTerm}`);
    const data = await response.json();
    data.message!=="Not Found" && setLocalStorage(searchTerm)
    return data;
}

export const getUserRepos = async(userName)=>{
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await response.json();
    return data;
}