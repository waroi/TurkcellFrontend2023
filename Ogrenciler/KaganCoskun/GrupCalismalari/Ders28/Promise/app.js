let button = document.querySelector(".btn");
let input = document.querySelector("#powerInput");
let result = document.querySelector("#result");



function getData(data){
    return new Promise(function(resolve,reject){
        result.innerHTML = "In Proccess...";
        console.log(typeof data)
        setTimeout(()=>{
            if(typeof data === "number" && isNaN(data) === false){
                console.log(data**2);
                resolve("We get Data");
                result.innerHTML = data**2;
        }
    else{
        console.log("Negative");
        result.innerHTML = "Lütfen Bir Sayı Giriniz";
        reject("We can not get Data");
    }} , 3000);
    });
}


button.addEventListener("click",()=>getData(Number(input.value)).then((response)=>console.log(response)).catch((err)=>console.error(err)));
