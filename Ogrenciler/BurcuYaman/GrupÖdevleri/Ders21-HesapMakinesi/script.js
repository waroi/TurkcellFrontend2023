
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
do {
    let answer = prompt("devam etmek ister misin?");

    if (answer == "evet") {
        console.log("devam");

        let sayi1 = document.getElementsById("sayi1").value;
        let sayi2 = document.getElementsById("sayi2").value;
        let operation = document.getElementsById("opeator").value;

        function hesapla() {
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




    }
    else {
        console.log("dur");
        rule = false;
    }
} while (rule)

