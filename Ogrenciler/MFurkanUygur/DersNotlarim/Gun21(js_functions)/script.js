let value = Number(prompt("Bir sayı giriniz:"));

let operation = prompt("Bu sayı ile ne yapmak istediğinizi seçiniz?\n1:Faktöriyel\n2:Asal Sayı\n3:Tek Çift\n4:Mükemmel Sayı")

function faktoriyel(value) {
    let fac = 1;
    for (let i = 1; i <= value; i++) {
        fac = fac * i;
    }
    return `${value} sayısının faktöriyeli ${fac}'dır.`;
}

function asal(value) {
    if (value === 2) {
        return `${value} sayısı asal bir sayıdır.`;
    }
    else if (value === 1) {
        return `${value} sayısı asal bir sayı değildir.`;

    }
    else {
        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                return `${value} sayısı asal bir sayı değildir.`;
            }
            else {
                return `${value} sayısı asal bir sayıdır.`;
            }
        }
    }
}

function tekcift(value) {
    if (value % 2 == 0) {
        return `${value} sayısı çift bir sayıdır.`
    }
    else
        return `${value} sayısı tek bir sayıdır.`
}

function mukemmel(value) {
    let sum = 0;
    for (let i = 1; i < value; i++) {
        if (value % i == 0) {
            sum += i;
        }
    }
    if (sum == value) {
        return `${value} sayısı mük bir sayıdır.`
    }
    else
        return `${value} sayısı mük bir sayı değildir.`
}

console.log(typeof operation)

switch (operation) {
    case "1":
        console.log(faktoriyel(value));
        break;
    case "2":
        console.log(asal(value));
        break;
    case "3":
        console.log(tekcift(value));
        break;
    case "4":
        console.log(mukemmel(value));
        break;
}
