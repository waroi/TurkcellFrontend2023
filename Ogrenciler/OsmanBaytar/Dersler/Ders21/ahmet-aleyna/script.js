console.log("Faktöriyel için 1 numarayı seçiniz.");
console.log("Asal sayı kontrolü için 2 numarayı seçiniz.");
console.log("Çift tek sayı kontrolü için 3 numarayı seçiniz.");
console.log("Süper sayı kontolü için 4 numarayı seçiniz.");

// while (true) {
let number = parseInt(prompt("İşlem alınacak sayıyı giriniz."));

if (!isNaN(number)) {

    let option = parseInt(prompt("Lütfen bir değer seçiniz."));

    function fact(x) {
        let result = 1;
        for (i = 1; i <= x; i++) {
            result = result * i;
        }
        console.log(`${x} sayısının faktöriyeli = ${result}`);
    }

    function asal(x) {
        let asal = true;
        for (i = 2; i <= x / 2; i++) {
            if (x % i == 0) {
                asal = false;
                break;
            }
        }
        if (asal == true) {
            console.log(`${x} sayısı asaldır.`);
        }
        else {
            console.log(`${x} sayısı asal değildir.`);
        }
    }

    function even(x) {
        if (x % 2 == 0) {
            console.log("Çift sayıdır.")
        }
        else {
            console.log("Tek sayıdır.");
        }
    }

    function perfect(x) {
        let sum = 0;
        for (i = 1; i < x; i++) {
            if (x % i == 0) {
                sum = sum + i;
            }
        }
        if (sum == x) {
            console.log(`${x} sayısı süper sayıdır.`);
        }
        else {
            console.log(`${x} sayısı süper sayı değildir.`);
        }
    }

    switch (option) {
        case 1:
            fact(number);
            break;
        case 2:
            asal(number);
            break;
        case 3:
            even(number);
            break;
        case 4:
            perfect(number);
            break;
        default:
            console.log("Lütfen geçerli bir değer giriniz.");
    }
}

else {
    number = parseInt(prompt("İşlem alınacak sayıyı giriniz."));
    // }
}

