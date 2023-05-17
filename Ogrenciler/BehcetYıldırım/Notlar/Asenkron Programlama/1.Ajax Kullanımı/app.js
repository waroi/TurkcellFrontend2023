//? HTTP status

// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

//? Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function () {
  const xhr = new XMLHttpRequest(); // Burada ajax işlemlerini yapabilmek için bir obje oluşturuyoruz.
  //!------------------------------ ESKİ YÖNTEM ------------------------------
  /* 
    xhr.onreadystatechange = function () {
        // onreadystatechange xhr objesi içinde olan bir fonksiyondur. Her state değiştiğinde çalışır.
        console.log(this.readyState);
        if (this.status == 200 && this.readyState == 4) {
        //Response hazırken
        console.log(this.responseText); // Responsetext ile gelen stringi alabiliriz.
        document.getElementById("veri").textContent = this.responseText;
        // Burada gelen veriyi "veri" id'li elementimizin içine gönderiyoruz ve ekranda basılıyor.
        }
    };
  */
  //!------------------------------ YENİ YÖNTEM ------------------------------

  xhr.onprogress = function () {
    // readyState 3'ken çalışır.
    console.log("readyState :", this.readyState);
  };

  xhr.onload = function () {
    // readyState 4'ken çalışır. Bu yüzden aşağıda sadece statusu kontrol edebiliriz.
    if (this.status == 200) {
      console.log("readyState :", this.readyState);
      document.getElementById("veri").textContent = this.responseText;
    }
  };

  xhr.open("GET", "text.txt", true); // open fonksiyonu ile bağlantı açıyoruz. Veri alacağımız için get işlemi yapıyoruz ve hangi dosyadan alacağımızı yazıyoruz.
  xhr.send(); // Send fonksiyonu ile requesti gönderebiliriz. Eğer post işlemi yapsaydık fonk. içine değer girerdik.
});
