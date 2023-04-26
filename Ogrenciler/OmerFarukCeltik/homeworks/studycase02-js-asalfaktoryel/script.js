let deger = prompt("yapmak istediğiniz işlemi seçiniz 1-faktöriyel 2-asal sayı 3- tek/çift 4-süper sayı");
let sayi = prompt("bir sayı giriniz");

if(deger == 1){
faktoriyel(sayi);
}
else if(deger == 2){
asal(sayi);
}else if(deger == 3){
tekCift(sayi);
}else if (deger == 4){
superSayi(sayi);
}
function faktoriyel(sayi){
  let faktoriyel = 1;
  for (let i = 1; i <= sayi; i++) {
    faktoriyel *= i;
  }
  console.log(faktoriyel);
}
function asal(sayi){
  for(let i = 2; i < sayi; i++){
    if (sayi%i == 0) {
      console.log("sayı asal sayı değildir");
    }else{
       console.log("sayı asal sayıdır");
    }
  }
}
function tekCift(sayi){
  if(sayi%2 == 0){
    return console.log("sayı çift.");
  }else{
    return console.log("sayı tek.");
  }
}
function superSayi(sayi){
  let sonuc = 0;
  for (let i = 1; i <= sayi/2; i++) {
    if(sayi%i == 0){
      sonuc += i;
    }
  }
  if (sonuc == sayi) {
  console.log("sayınız mükemmel sayıdır");
  }else{
    console.log("sayınız mükemmel sayı değildir");
  }
  }

