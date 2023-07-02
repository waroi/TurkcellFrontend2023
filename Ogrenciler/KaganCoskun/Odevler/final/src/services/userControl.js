import Cookies from 'js-cookie';

export const register=async (user)=>{
    const {email,password}=user;

    if((await isUserExist(email)).length>0){
        throw new Error('User already exist')
    }

    const response=await fetch(`${import.meta.env.VITE_API_URL}/users`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password,role:'user',id:self.crypto.randomUUID()})})
    return await response.json()
}


export const login=async (user)=>{
    const {email,password}=user;

    const users=await isUserExist(email)

    if(users.length===0){
        throw new Error('User not found')
    }

    if(users[0].password!==password){
        throw new Error('Password is incorrect')
    }
    
    return {...users}
}

const isUserExist=async (email)=>{
    const response=await fetch(`${import.meta.env.VITE_API_URL}/users?email=${email}`)
    const users=await response.json()
    return users
}

export const setCookie=(token)=>{
    Cookies.set('token', token);
}

export const getCookie=()=>{
    return Cookies.get('token')
}

export const removeCookie=()=>{
    Cookies.remove('token')
}
