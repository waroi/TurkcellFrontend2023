export function setLocalStorage(userName){
let storageData = [];
if(getLocalStorage()){
    storageData = getLocalStorage();
}
 let response = storageData.find(element => element.toLowerCase() === userName.toLowerCase());
 let index = storageData.indexOf(userName);
 !response && storageData.unshift(userName)
 if(response && index >-1){
    storageData.splice(index, 1);
    storageData.unshift(userName);
 }
 
localStorage.setItem("userList",JSON.stringify(storageData));
}

export function getLocalStorage(){
    let storageData = JSON.parse(localStorage.getItem("userList"));
    return storageData;
}