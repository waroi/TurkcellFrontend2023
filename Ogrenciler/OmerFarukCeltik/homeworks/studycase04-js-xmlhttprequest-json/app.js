let btn = document.querySelector("#btn");
let userstable = document.querySelector("#userstable");

btn.addEventListener("click", function(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","test.json", true);
  xhr.onload = function() {
    if(this.status == 200){
      let parsedData = JSON.parse(this.responseText);
      userstable.innerHTML += `
      `
    }
  }
  xhr.send();
})