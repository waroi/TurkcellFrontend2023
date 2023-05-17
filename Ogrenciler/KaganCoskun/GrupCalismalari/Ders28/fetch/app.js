let button = document.querySelector(".btn");
let tableBody = document.querySelector("#tableBody");



function getData(){
    
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>writeUi(data)).catch((err)=>console.error(err));
    
}


function writeUi(data){
    data.map(element => {
        tableBody.innerHTML += `
        <tr>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
        <td>${element.website}</td>
        <td>${element.company.name}</td>
        </tr>
        `
    });
}


button.addEventListener("click",getData);
