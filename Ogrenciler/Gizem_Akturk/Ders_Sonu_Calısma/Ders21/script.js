


calculater();

function calculater() {
    var isKeepGoing = true;
    while (isKeepGoing) {
        var number1 = prompt("Bir sayı giriniz");
        if (number1 === null) {
            break;
        }
            
        if (checknumber(number1)) {

            var number2 = prompt("Bir sayı daha giriniz");
            if (number2 === null) {
                break;
            }

            if (checknumber(number2)) {

                var operation = prompt("Yapmak istediğiniz işlemin numarasını yazınız\n1-Toplama\n2-Çıkarma\n3-Çarpma\n4-Bölme");

                if (operation === null) {
                    break;
                }
                switch (operation) {
                    case "1":
                        alert("Toplama işleminin sonucu: " + sum(number1, number2));
                        keepgoing();
                        break;
                    case "2":
                        alert("Çıkarma işleminin sonucu: " + sub(number1, number2));
                        keepgoing();
                        break;
                    case "3":
                        alert("Çarpma işleminin sonucu: " + mult(number1, number2));
                        keepgoing();
                        break;
                    case "4":
                        alert("Bölme işleminin sonucu: " + div(number1, number2));
                        keepgoing();
                        break;
                    default:
                        alert("Yanlış bir işlem numarası girdiniz");
                        keepgoing();
                        break;
                }
            } else {
                alert("Lütfen sayı giriniz");
            }
        } else {
            alert("Lütfen sayı giriniz");
        }

    }
}

function keepgoing() {
    var go = prompt("Bir işlem daha yapmak istiyor musunuz? (E/H)");

    if (go == "E" || go == "e") {
        isKeepGoing = true;
    } else {
        isKeepGoing = false;
    }
}

function sum(number1, number2) {
    return Number(number1) + Number(number2);
}

function sub(number1, number2) {
    return Number(number1) - Number(number2);
}

function mult(number1, number2) {
    return Number(number1) * Number(number2);
}

function div(number1, number2) {
    return Number(number1) / Number(number2);
}

function checknumber(number) {
  console.log(number);
    return !isNaN(number) && number !== null && number !== "";
}



