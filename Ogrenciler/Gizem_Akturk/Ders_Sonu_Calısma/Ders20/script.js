let number= Math.floor(Math.random()*100);

let remember = 0;
let score=100;

for(flag = false; flag == false; remember++){
    usernumber= prompt("Sayı giriniz");
    if (usernumber>number){
        alert("Daha küçük bir sayı giriniz");
        score=score-10;
    }else if(usernumber<number){
        alert("Daha büyük bir sayı giriniz");
        score=score-10;}
    else{
        alert("Tebrikler! " + remember + " denemede bildiniz");
    if(score>0){ 
        alert("Puanınız: " + score);
        
    }else{
       alert("Puanınız 0'dır");
    }
        flag = true;
    }
   
}
