(function () {
  let screen = document.getElementById("screen");
  let buttons = document.querySelectorAll(".number");
  let equalBtn = document.getElementById("equ");
  let clearBtn = document.querySelector(".btn-danger");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let number = this.dataset.num;
      screen.value += number;
      console.log(screen.value);
    });
  });

  equalBtn.addEventListener("click", function () {
    if (screen.value === "") {
      alert("Lütfen bir işlem giriniz!");
      screen.value = "Lütfen bir işlem giriniz!";
    } else {
      let value = eval(screen.value); 
      // eval fonksiyonu string ifadeleri matematiksel işlemlere çevirir.
      
      screen.value = value;
    }
  });

  clearBtn.addEventListener("click", function () {
    if(screen.value === ""){
      alert("Lütfen bir işlem giriniz!");
    }else{
      screen.value = "";
    }
  });

  // function updeted (string){
  //  let degisen = string.split(" ");
  //  degisen.map((item) => console.log(item.flat())
  //  )
   
  // }

  // updeted("ben çok iyi bir programcıyım");
})();


