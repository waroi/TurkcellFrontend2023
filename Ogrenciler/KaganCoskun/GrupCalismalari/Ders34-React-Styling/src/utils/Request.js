import { setLocalStorage } from "./localStorage";

export const getUser = async(searchTerm)=>{
    const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/${searchTerm}`);
    const data = await response.json();
    data.message!=="Not Found" && setLocalStorage(searchTerm)
    return data;
}

export const getUserRepos = async(userName)=>{
    const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/${userName}/repos`);
    const data = await response.json();
    return data;
}