let bool = true;
value =document;
console.log(value);


while(bool){
let number1 = parseFloat(prompt("birinci sayıyı giriniz."));  //parseFloat fonksiyonu, verilen bir dizeyi (string) ondalık bir sayıya dönüştürür.//
let number2 = parseFloat( prompt("ikinci sayıyı giriniz."));
let rule = prompt("lütfen yapmak istediğiniz işlemi seçiniz. \n1:Toplama \n2:Çıkarma \n3:Çarpma \n4:Bölme");
if (rule == 1) {
  alert(`işlem sonucu: ${toplama(number1,number2)}`);
}else if(rule == 2){
  alert(`işlem sonucu: ${cikarma(number1,number2)}`);
}else if(rule == 3){
  alert(`işlem sonucu: ${carpma(number1,number2)}`);
}else if(rule == 4){
  alert(`işlem sonucu: ${bolme(number1,number2)}`);
}
let cont = prompt("devam etmek ister misiniz? 1:evet 2:hayır");
if(cont == 1){

}else if(cont == 2){
  bool = false;
  break;
}
}
function toplama(n1,n2) {
   return n1+n2;
}
function cikarma(n1,n2) {
   return n1-n2;
}
function carpma(n1,n2) {
   return n1*n2;
}
function bolme(n1,n2) {
   return n1/n2;
}
