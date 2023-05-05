function add(number1,number2){
    return number1+number2;
}
function reduce(number1,number2){
    return number1-number2;
}
function divide(number1,number2){
    if(number2==0){
        alert("Sıfıra Bölünme Hatası");
    }
    else{
        return (number1/number2);
    }
}
function multip(number1,number2){
    return number1*number2;
}


while(true) {
    let value1=Number(prompt("İlk Sayıyı Giriniz"));
    let value2=Number(prompt("İkinci Sayıyı Giriniz"));

    let operation=Number(prompt("Yapılacak İşlemi Seçiniz \n 1-Toplama\n 2-Çıkarma \n 3-Bölme \n 4-Çarpma"));

    while(operation<0 || operation>4){
        console.log("Lütfen Geçerli Bir İşlem Giriniz");
        operation=Number(prompt("Yapılacak İşlemi Seçiniz \n 1-Toplama\n 2-Çıkarma \n 3-Bölme \n 4-Çarpma"));
        if(operation>0 && operation<=4){
            break;
        }
        else{
            continue;
        }
    }

    switch (operation){
        case 1:
            console.log(add(value1,value2));
            break;
        case 2:
            console.log(reduce(value1,value2));
            break;
        case 3:
            console.log(divide(value1,value2));
            break;
        case 4:
            console.log(multip(value1,value2));
            break;
    }

    let process=String(prompt("Yeniden İşlem Yapmak İster Misiniz?"));

    while(!(process=="y" || process=="n")){
        console.log("Geçersiz Karakter Girdiniz");
        process=String(prompt("Yeniden İşlem Yapmak İster Misiniz?"));
        if(process=="y" || process=="n"){
            break;
        }
        else{
            continue;
        }
    }

    if(process=="y"){
        continue;
    }
    else if(process=="n"){
        break;
    }

}

