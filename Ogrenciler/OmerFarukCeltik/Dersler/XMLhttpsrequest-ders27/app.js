let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
      console.log("success");
    }
  }
  xhr.open("GET","test.txt", true);
  xhr.send();
})

