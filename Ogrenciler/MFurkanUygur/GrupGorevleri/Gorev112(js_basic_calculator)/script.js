
function toplama(sayi1, sayi2) {
    return sayi1 + sayi2;
}

function cikarma(sayi1, sayi2) {
    return sayi1 - sayi2;
}

function carpma(sayi1, sayi2) {
    return sayi1 * sayi2;
}

function bolme(sayi1, sayi2) {
    if (sayi2 === 0) {
        return "Hata: sıfıra bölünemez";
    } else {
        return sayi1 / sayi2;
    }
}

let rule = true;
while (rule) {
    let operation = prompt("Bu sayı ile ne yapmak istediğinizi seçiniz?\n1:Toplama\n2:Çıkarma\n3:Çarpma\n4:Bölme\n5:Çıkış")
    if (operation == "5") {
        rule = false
    }
    else if (operation == "") {
        alert("boş geçme");
    }
    else {
        let sayi1 = Number(prompt("İlk sayı giriniz:"));
        let sayi2 = Number(prompt("İkinci sayı giriniz:"));

        while (sayi1 == "" || sayi2 == "" || isNaN(sayi1) || isNaN(sayi2)) {
            alert("Lütfen tüm sayıları sayı olarak giriniz");
            sayi1 = Number(prompt("İlk sayı giriniz:"));
            sayi2 = Number(prompt("İkinci sayı giriniz:"));
        }
        switch (operation) {
            case "1":
                console.log(toplama(sayi1, sayi2));
                break;
            case "2":
                console.log(cikarma(sayi1, sayi2));
                break;
            case "3":
                console.log(carpma(sayi1, sayi2));
                break;
            case "4":
                console.log(bolme(sayi1, sayi2));
                break;
        }
        let answer = prompt("devam etmek ister misin?");
        while (answer == "") {
            alert("Bir cevap giriniz?")
            answer = prompt("devam etmek ister misin?");
        }
        if (answer == "hayır") {
            console.log("dur");
            rule = false;
        }
    }
}
