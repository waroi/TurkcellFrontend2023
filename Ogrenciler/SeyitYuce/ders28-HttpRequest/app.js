document.getElementById("btn-submit").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function () {
    // console.log(this.readyState);
    // if(this.readyState===4 && this.status===200){
    //     console.log(this.responseText)
    // }
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText)
            document.getElementById("veri").innerHTML=this.responseText
        } else if(this.status===404){
            document.getElementById("veri").innerHTML="Aranan veri bulunamadı"
        }
    }
  };
  xhr.open("GET", "t2ext.txt", true);
  xhr.send()
});
