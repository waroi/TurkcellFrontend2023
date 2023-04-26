// Kullanıcıdan değer almak
// Grup Çalışması(Banu-Selim-Selahattin)

let num=Math.floor(Math.random()*100);
let say=0;
console.log(num);
let puan;
let value =prompt("değer girin");

for(;;){
    console.log(parseInt(num));
    if(value>num){
        console.log("değeriniz büyük");
        value=prompt("tekrar");
        say+=1;
    }
    else if(value == num){
        console.log("değeriniz doğru");
        say+=1;

        if(say>0 && say<=3){
           puan=100;
           alert("tebrikler knks "+ say +" denemenizde bildiniz " + puan+ " kazandınız");
        }
        else if(say>3 && say<=5){
            puan=80;
            alert("tebrikler knks "+ say +" denemenizde bildiniz " + puan+ " kazandınız");
        }
        else{
            puan=30;
           alert("şansına küs "+ say +" denemenizde bildiniz " + puan+ " kazandınız");
        }

        break;
    }
    else if(value<num){
        console.log("değeriniz küçük");
        value=prompt("tekrar");
        say+=1;
    }
}