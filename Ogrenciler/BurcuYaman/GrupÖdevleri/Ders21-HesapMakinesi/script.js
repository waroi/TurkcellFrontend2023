
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


let sayi1 = Number(prompt("İlk sayı giriniz:"));
let sayi2 = Number(prompt("İkinci sayı giriniz:"));

let operation = prompt("Bu sayı ile ne yapmak istediğinizi seçiniz?\n1:Toplama\n2:Çıkarma\n3:Çarpma\n4:Bölme")

if (isNaN(sayi1) || isNaN(sayi2)) {
    alert("Hata: Lütfen geçerli bir sayı girin.");
} else {
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
}




