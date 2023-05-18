// promise konusu bize işlem önceliği gibi durum teşkil etmektedir
// burada öncelikle gelecek verinin zamanını bilmediğimiz için bu verinin
// gelme durumunu göz önüne alarak gelme durumunda yapılacakları başarılı veya başarısız
// değerler özelinde gösterir.

// js için önemli özellik js her zaman senkron çalışır
// ama bu promise özelliği asenkron gibi çalışıyor ama arka planda senkron çalışır

function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data == "string") {
        console.log("data is string");
        resolve("datayı aldık");
      } else {
        console.log("olumsuz");
        reject("datayı alamadık");
      }
    }, 1000);
  });
}

// istek başarılı dönerse yapılacaklar
// tek satır için paranteze gerek yok
getData("test")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
