(function hesapMakinesi() {
  let screen = document.getElementById("screen");
  let buttons = document.querySelectorAll(".number");
  let ilksayi = document.querySelector(".numbers");
  let ikincisayi = document.querySelectorAll(".numbers");
  let equalBtn = document.getElementById("equ");
  let clearBtn = document.querySelector(".btn-danger");


  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let number = this.dataset.num;
      screen.value += number;
      console.log(screen.value);
    });
  });
  function hesapla(ilkSayi, ikinciSayi, equalBtn) {
      let plusBtn = document.getElementById("plus");
      let extractionBtn = document.getElementById("extraction");
      let divideBtn = document.getElementById("divide");
      let multipleBtn = document.getElementById("multiple");
    let sonuc;

    switch (equalBtn) {
      case plusBtn:
        sonuc = ilkSayi + ikinciSayi;
        break;
      case multipleBtn:
        sonuc = ilkSayi - ikinciSayi;
        break;
      case extractionBtn:
        sonuc = ilkSayi * ikinciSayi;
        break;
      case divideBtn:
        if (ikinciSayi === 0) {
          alert("Sıfıra bölme hatası!");
          return;
        }
        sonuc = ilkSayi / ikinciSayi;
        break;
      default:
        alert("Geçersiz işlem!");
        return;
    }
    alert("Sonuç: " + sonuc);
  }

  equalBtn.addEventListener("click", hesapla(ilksayi, ikincisayi, islem));
  clearBtn.addEventListener("click", function () {
    if (screen.value === "") {
      alert("Lütfen bir işlem giriniz!");
    } else {
      screen.value = "";
    }
  });
})();
