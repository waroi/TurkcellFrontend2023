function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(typeof data === "string"){
                console.log("Data is string");
                resolve("We get Data");
        }
    else{
        console.log("Negative");
        reject("We can not get Data");
    }} , 1000);
    });
}


getData(4).then((response)=>console.log(response)).catch((err)=>console.error(err));