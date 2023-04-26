
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
let operations = ["1", "2", "3", "4", "5"]
while (rule) {
    let operation = prompt("Bu sayı ile ne yapmak istediğinizi seçiniz?\n1:Toplama\n2:Çıkarma\n3:Çarpma\n4:Bölme\n5:Çıkış")
    if (operation == "5") {
        rule = false
    }
    // else if (operation !== "1" && operation !== "2" && operation !== "3" && operation !== "4" && operation !== "5") {
    //     alert("düzgün işlem gir")
    // }
    else if (!operations.includes(operation)) {
        alert("Geçerli işlem giriniz.")
    }
    else {
        let sayi1 = Number(prompt("İlk sayı giriniz:"));
        let sayi2 = Number(prompt("İkinci sayı giriniz:"));

        while (sayi1 == "" || sayi2 == "" || isNaN(sayi1) || isNaN(sayi2)) {
            alert("Lütfen tüm sayıları adam gibi giriniz.");
            sayi1 = Number(prompt("İlk sayı giriniz:"));
            sayi2 = Number(prompt("İkinci sayı giriniz:"));
        }
        switch (operation) {
            case "1":
                alert(toplama(sayi1, sayi2));
                break;
            case "2":
                alert(cikarma(sayi1, sayi2));
                break;
            case "3":
                alert(carpma(sayi1, sayi2));
                break;
            case "4":
                alert(bolme(sayi1, sayi2));
                break;
        }
        let answer = prompt("Devam etmek ister misin?\n Çıkış için 'h'\n Yeni bir işlem için herhangi bir tuşa basınız");
        while (answer == "") {
            alert("Doğru bir cevap giriniz?")
            answer = prompt("Devam etmek ister misin?\n Çıkış için 'h'\n Yeni bir işlem için herhangi bir tuşa basınız");
        }
        if (answer == "h") {
            rule = false;
        }
    }
}
