// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function HesapMakinesi(ilkSayi, ikinciSayi, islem) {
  let sonuc;
 let ilk = parseInt(ilkSayi);
 let ikinci = parseInt(ikinciSayi);
  switch (islem) {
    case "+":
      sonuc = ilk + ikinci;
      break;
    case "-":
      sonuc = ilk - ikinci;
      break;
    case "*":
      sonuc = ilk * ikinci;
      break;
    case "/":
      sonuc = ilk / ikinci;
      break;
   
  }
  return console.log(sonuc);
}

for (let i = 0; i < Infinity; i++) {
    let islemYapilacakMi = prompt("İşlem yapmak istiyorsanız 'Y veya y' istemiyorsanız 'N veya n' yazınız\n");
    if(islemYapilacakMi.toLowerCase()=="y"){
        let ilkSayi;
        let ikinciSayi;
        let  islem;;
        let islemler = ["+", "-" ,"*", "/"];
    while(!ilkSayi || !ikinciSayi || !islem){
         
      while(!ilkSayi || ilkSayi === NaN){
         ilkSayi = Number(prompt("İlk Sayıyı  Girin\n"));
        
      }
      while(!ikinciSayi || ikinciSayi === NaN){
         ikinciSayi = Number(prompt("İkinci  Sayıyı  Girin\n"))
        
      }
      
     while(!islemler.includes(islem)){
       islem = prompt("İşlemi  Girin\n")
        
     }
         
        
      
     
      
    }
      HesapMakinesi(ilkSayi, ikinciSayi, islem); 
       
    }
    else if(islemYapilacakMi.toLowerCase()=="n"){
        console.log("Görüşmek üzere")
        break;
    }
    else{
        console.log("Lütfen geçerli bir değer giriniz\n");
        
    }
  
}
