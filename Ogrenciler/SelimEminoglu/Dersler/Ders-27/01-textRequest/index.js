document.getElementById("btn-menu").addEventListener("click", function () {
  // XMLhttp request
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  //   içindeki readystate ile isteğin süreç boyunca durumunu sorgulayabiliriz
  // bu sorgulama 0 da istek hareket etmedi 4 olduğunda ulaştı gibidir
  // status bize istek için hata kodlarını döndürmeyi sağlıyor
  // bunlar 200,400,404 gibi kodlardır
  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
    if (this.readyState === 4 && this.status === 404) {
      console.log("veri yok");
    }
  };
  //   onload durumu istek yollanırken çalışacak şekilde ayarlanmış oluyor
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById("veri").textContent = this.responseText;
      console.log(this.responseText);
    }
  };
  xhr.open("GET", "test.txt", true);
  //   true değeri asenkron olup olmayacağına karar verir
  xhr.send();
});
